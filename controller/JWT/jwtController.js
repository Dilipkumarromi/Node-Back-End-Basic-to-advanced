const db = require('../../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecKey=process.env.JWT_TOKEN
console.log('jwt',jwtSecKey)
exports.login=async(req,res)=>{
    try {
        console.log('login api call')
        const {password,email}=req.body

        const data=await db.tbl_customer_master_login.findOne({
            where:{
                email:email
            },
            // attributes:['firstName','lastName','email'] 
            // attributes: ["firstName","lastName","email"]
            // attributes: {
            //     exclude: ["password",]
            // },
        })
        if(data){
            const valid=await bcrypt.compare(password,data.password)

            if(valid){
                const jwtToken=jwt.sign({name:data.firstName},jwtSecKey,{expiresIn:'5 min'})
                console.log('jwt token generate',jwtToken)
                res.send({
                    status:200,
                    message:'login successfully! 👌',
                    result:data,
                    jwttoken:jwtToken
                   
                })

                
            }
            else{
                res.send({
                    status:403,
                    message:'invalid password! 🤦‍♀️'
                    
                })
            }
        }
        else{
            res.send({
                status:403,
                message:'invalid email id! 🤦‍♀️'
                
            })
        }
    } catch (error) {
        
    }
}