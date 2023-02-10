const express=require('express')
const router=express()
const tbl_registration=require('../controller/registrationController')
const tbl_login=require('../controller/loginController')
const address=require('../controller/addressController')
const courseController=require('../controller/courseController')
const tbl_customer_master_login=require('../controller/customerMasterLogin')
const jwtController=require('../controller/JWT/jwtController')
const Register=require('../controller/Account-Register/Register')
const token=require('../middleware/jwtTokenVerify')
const Email = require('../utility/email')
//post
router
    .post('/registration/create',tbl_registration.create)
    .post('/login/create',tbl_login.create)
    .post('/address/create',address.create)
    .post('/course/create',courseController.create)
    .post('/customer/registration',tbl_customer_master_login.customerLogin)
    .post('/user/login',tbl_customer_master_login.login)

    //JWT TOKEN
    .post('/jwt/customer/login',jwtController.login)


    

//get
router
    .get('/registration/getFindByEmail/:email',tbl_registration.getFindByEmail)
    .get('/course/get/:id',courseController.get)
    .get('/reg/get/:email',tbl_registration.getDataByEmail)

    //middleware
    .get('/user/list',token.jwtVerify,tbl_customer_master_login.getUserList)



router.get('/login/get/:email',tbl_login.getFindByEmail)

//update
router.patch('/user/update',tbl_registration.update)

//delete
router.delete('/user/delete',tbl_registration.delete)

router.delete('/user/delete/:email',tbl_registration.delete)

router.get('/user/delete/:email',tbl_registration.delete)

router.post('/user/delete/:email',tbl_registration.delete)

router.post('/user-send-email',Register.studentRegister)

module.exports=router