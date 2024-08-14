const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors(
    {
        origin:["https://deals-frontend-puce.vercel.app"],
        methods:["POST","GET","PUSH"],
        credentials:true
    }
))


const StudentModel=require('./models/Student')
const UserModel=require('./models/Users')
mongoose.connect("mongodb+srv://sivamaniramayanam7036:sivamani@cluster0.uu6w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MongoDB Connected Succesfully!");
    })
    .catch((error) => {
        console.log(`${error}`);
    });
    app.post('/login',(req,res)=>{
        const {email,password}=req.body;
        StudentModel.findOne({email:email})
        .then(user =>{
            if(user){
                if (user.password === password){
                    res.json("success")
                }
                else{
                    res.json("The password is not Correct")
                }}
                else{
                    res.json("no Records Exsisted")
                }
            }
        )
    })
    app.post('/register',(req,res)=>{
        StudentModel.create(req.body)
        .then(students=>res.json(students))
        .catch(err=>res.json(err))
        
    })
    // Employee list
    app.get('/users',(req,res)=>{
        UserModel.find({})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))

    })
    app.get('/getUser/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findById({_id:id})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.post('/create',(req,res)=>{
        UserModel.create(req.body)
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.put('/update/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,mobile:req.body.mobile,designation:req.body.designation})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
app.listen(3002,()=>{
    console.log("server is running")
})
