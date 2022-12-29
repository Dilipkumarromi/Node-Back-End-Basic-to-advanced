const db=require('../models/index')
const bcrypt = require('bcrypt');

exports.customerLogin=async(req,res)=>{
    try {
        const { password } = req.body
        const salt = await bcrypt.genSalt(14);//123
        const hash = await bcrypt.hash(password, salt)
    
        const post={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hash
        }

    const data=await db.tbl_customer_master_login.create(post).then(result=>{
        res.send({
            status:200,
            message:'registration successully!',
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