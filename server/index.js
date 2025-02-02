const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json()) //transport data from frontend to backend like json
app.use(cors())





mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/register',(req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees =>res.json(employees))
    .catch(err => res.json(err))
})
app.post('/',(req, res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email:email}, {password:password})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")

            } else {
                res.json("password is incorrect")
            }
        }else{
            res.json("no records")
        }
    
    })
})

app.listen(3000,()=>{
    console.log("server is running on 3000");
})