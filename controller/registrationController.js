const db=require('../models/index')

//insert data into database

exports.create=async(req,res)=>{
    try {
        console.log('body',req.body)
        const email=req.body.email

        const isExsting=await db.tbl_registration.findOne({
            where:{
                email:email,
            }
        })
        console.log('data',isExsting===null)
        if(isExsting===null){
            const data=await db.tbl_registration.create(req.body).then(result=>{
                res.send({
                    status:200,
                    message:'save data!',
                    data:result
                })
            })
        }
        else{
            return res.send({
                status:200,
                message:'Already exist data',
                data:isExsting
            })
        }

       
        
    } catch (error) {
        return  res.send({
            status:500,
            message:error.message            
        })
    }
}


exports.getFindByEmail=async(req,res)=>{
    try {
        // const email=req.body.email
        const email=req.params.email
        console.log('body',db.tbl_address)
        const data= await db.tbl_registration.findAll({where:{
            email:email,
           
            
        }, include    : [{ model: db.tbl_address, as:'address'}]})

        console.log(data.length)
        if(data.length<=0){
            return res.send({
                status:200,
                message:'data not found!'
            })
        }
        else{
            res.send({
                status:200,
                message:'fetch records!',
                data:data
            })
        }
    } catch (error) {
        return res.send({
            status:500,
            message:`error:${error.message}`
        })
    }
}
exports.update=async(req,res)=>{
    try {
        const userInputId=req.body.userInputId
        // console.log('test',userInputId.)  

        const updateData={
            userInputId:req.body.userInputId, 
            first_name:req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            mobile:req.body.mobile
           
        }

        console.log('body request',updateData)
        const data=await db.tbl_registration.update(updateData,{
            where:{
                id:userInputId   
            }
        }).then(result=>{
            return res.send({
                status:200,
                message:'update successully!',
                data:result
            })
        })
    } catch (error) {
        return res.send({
            status:500,
            message:`error:${error.message}`
        })
    }
}


exports.delete=async(req,res)=>{
    try {

        // const email=req.body.email
        const email=req.params.email
        
        const data=await db.tbl_registration.destroy({
            where:{
                email:email
            }
        })
        return res.send({
            status:200,
            message:'delete successully',
            data:data
        })
        
    } catch (error) {
        return res.send({
            status:500,
            message:`error:${error.message}`
        })
    }
}


exports.getDataByEmail=async(req,res)=>{
    try {

        const email=req.params.email

        const data=await db.tbl_registration.findOne({
            where:{
                email:email
            },
            include:['course','address']
        }).then(result=>{
            res.send({
                status:200,
                message:'Data fetch',
                data:result
            })
        })
        
    } catch (error) {
        res.send({
            status:500,
            message:error.message
        })
    }
}