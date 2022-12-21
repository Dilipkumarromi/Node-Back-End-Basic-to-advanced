const db=require('../models/index')
const Sequelize = require('sequelize');
exports.create=async(req,res)=>{
    try {

        const email=req.body.email

        const isExsting=await db.tbl_login.findOne({
            where:{
                email:email,
            }
        })
        console.log('data',isExsting===null)
        if(isExsting===null){
            const data=await db.tbl_login.create(req.body).then(result=>{
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
        const data= await db.tbl_login.findAll({where:{
            email:email
        },
           
            include: {
                model: db.tbl_registration,
                as: 'registration',
              },
        })

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