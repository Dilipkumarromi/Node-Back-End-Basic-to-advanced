const db=require('../models/index')
const Ajv = require("ajv")
const ajv = new Ajv()
const addressValidatorSchema = require('./ajvValidator/addressValidator')

exports.create=async(req,res)=>{
    console.log('body',req.body)
    try {
        const validate = ajv.compile(addressValidatorSchema)
        const valid = validate(req.body)
        if (!valid) 
        {
            res.send({
                status:500,
                message:validate.errors
            })
        }
        else{
            const data=await db.tbl_address.create(req.body).then(result=>{
                res.send({
                    status:200,
                    message:'create successfully!',
                    data:result
                })
            })
        }
    } catch (error) {
        res.send({
            status:500,
            message:error.message
        })
    }
}