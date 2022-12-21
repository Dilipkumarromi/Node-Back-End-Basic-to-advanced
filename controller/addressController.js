const db=require('../models/index')

exports.create=async(req,res)=>{
    try {
        
        const data=await db.tbl_address.create(req.body).then(result=>{
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