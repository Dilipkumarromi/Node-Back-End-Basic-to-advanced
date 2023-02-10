const db=require('../../models/index')
const { Email } = require('../../utility/email')
 

exports.studentRegister=async(req,res)=>{
    try {
        const {name,email}=req.body
        Email(email,name,"send test email")
        res.send({
            status:200,
            data:'email send successfully!'
        })
    } catch (error) {
        res.send({
            status:500,
            message:error.message
        })
    }
}