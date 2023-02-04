const db = require('../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.customerLogin = async (req, res) => {
    try {
        const { password } = req.body
        const salt = await bcrypt.genSalt(14);//123
        const hash = await bcrypt.hash(password, salt)

        const post = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        }

        const data = await db.tbl_customer_master_login.create(post).then(result => {
            res.send({
                status: 200,
                message: 'registration successully!',
                data: result
            })
        })

    } catch (error) {
        res.send({
            status: 500,
            message: error.message
        })
    }
}
// login with jwt token generate
// exports.login = async (req, res) => {
//     try {

//        const { password, email } = req.body
//         const data = await db.tbl_customer_master_login.findOne({
//             where: {
//                 email: email
//             }
//         })


//         if (!data) {
//             res.send({
//                 status: 403,
//                 message: 'User not register!'
//             })
//         }
//         else {
//             const valid = await bcrypt.compare(password, data.password)
//             // passwordMatch? valid:inValid            
//             if (valid) {
//                 //valid password
//                res.send({
//                     status: 200,
//                     message: 'login Successfully',
//                     result: data
//                 })
//             }
//             else{
//              // invalid password
//                res.send({
//                     status:403,
//                     message:'Invalid email or password🤦‍♂️'
//                 })
//             }
//         }


//     }
//     catch (error) {
//         res.send({
//             status: 500,
//             message: `Error:${error.message}`
//         })
//     }
// }

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
                const jwtToken=jwt.sign({name:data.firstName},'ddssd554')
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