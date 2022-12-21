const db=require('../models/index')

exports.create=async(req,res)=>{
    try {

        const data=await db.tbl_course.create(req.body).then(result=>{
            res.send({
                status:200,
                message:'create successfully!',
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

exports.get=async(req,res)=>{
    try {
        const {id}=req.params

        const data=await db.tbl_course.findOne({
            where:{
               id:id
            }
        }).then(result=>{
            res.send({
                status:200,
                message:'fetch data successfully!',
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