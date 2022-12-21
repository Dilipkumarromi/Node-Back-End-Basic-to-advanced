const expres=require('express')
const app=expres()
const bodyParser = require('body-parser')
const { application } = require('express')
console.log('welcome to dilipcodingskills ')

const router=require('./router/router')
 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())



app.use(router)
app.listen(81,()=>{
    console.log('server is runing..')
})