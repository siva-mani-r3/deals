const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
var nodemailer = require('nodemailer');
const StudentModel=require('./models/Student')
const UserModel=require('./models/Users')
const UserModel1=require('./models/Users2')
const UserModel2=require('./models/Users3')
const UserModel3=require('./models/Users4')
const UserModel4=require('./models/Users5')
const UserModel5=require('./models/Users6')
const UserModel6=require('./models/Users7')
const UserModel7=require('./models/Users8')
const Siva=require('./models/Testing')
 mongoose.connect("mongodb+srv://Author:sivamani@cluster0.mebcwvx.mongodb.net/students")
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
                    Sivamani()
                

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
    // room1
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
        UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    // room2
    app.get('/users2',(req,res)=>{
        UserModel1.find({})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))

    })
    app.get('/getUser2/:id',(req,res)=>{
        const id=req.params.id;
        UserModel1.findById({_id:id})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.post('/create2',(req,res)=>{
        UserModel1.create(req.body)
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.put('/update2/:id',(req,res)=>{
        const id=req.params.id;
        UserModel1.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser2/:id',(req,res)=>{
        const id=req.params.id;
        UserModel1.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room3
    app.get('/users3',(req,res)=>{
        UserModel2.find({})
        .then(users3=>res.json(users3))
        .catch(err=>res.json(err))

    })
    app.get('/getUser3/:id',(req,res)=>{
        const id=req.params.id;
        UserModel2.findById({_id:id})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.post('/create3',(req,res)=>{
        UserModel2.create(req.body)
        .then(users3=>res.json(users3))
        .catch(err=>res.json(err))
    })
    app.put('/update3/:id',(req,res)=>{
        const id=req.params.id;
        UserModel2.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser3/:id',(req,res)=>{
        const id=req.params.id;
        UserModel2.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room4
    app.get('/users4',(req,res)=>{
        UserModel3.find({})
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))

    })
    app.get('/getUser4/:id',(req,res)=>{
        const id=req.params.id;
        UserModel3.findById({_id:id})
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))
    })
    app.post('/create4',(req,res)=>{
        UserModel3.create(req.body)
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))
    })
    app.put('/update4/:id',(req,res)=>{
        const id=req.params.id;
        UserModel3.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser4/:id',(req,res)=>{
        const id=req.params.id;
        UserModel3.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room5
    app.get('/users5',(req,res)=>{
        UserModel4.find({})
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))

    })
    app.get('/getUser5/:id',(req,res)=>{
        const id=req.params.id;
        UserModel4.findById({_id:id})
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))
    })
    app.post('/create5',(req,res)=>{
        UserModel4.create(req.body)
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))
    })
    app.put('/update5/:id',(req,res)=>{
        const id=req.params.id;
        UserModel4.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser5/:id',(req,res)=>{
        const id=req.params.id;
        UserModel4.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room6
    app.get('/users6',(req,res)=>{
        UserModel5.find({})
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))

    })
    app.get('/getUser6/:id',(req,res)=>{
        const id=req.params.id;
        UserModel5.findById({_id:id})
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.post('/create6',(req,res)=>{
        UserModel5.create(req.body)
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.put('/update6/:id',(req,res)=>{
        const id=req.params.id;
        UserModel5.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser6/:id',(req,res)=>{
        const id=req.params.id;
        UserModel5.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room7
    app.get('/users7',(req,res)=>{
        UserModel6.find({})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))

    })
    app.get('/getUser7/:id',(req,res)=>{
        const id=req.params.id;
        UserModel6.findById({_id:id})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))
    })
    app.post('/create7',(req,res)=>{
        UserModel6.create(req.body)
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))
    })
    app.put('/update7/:id',(req,res)=>{
        const id=req.params.id;
        UserModel6.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser7/:id',(req,res)=>{
        const id=req.params.id;
        UserModel6.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room8
    app.post
    app.get('/users8',(req,res)=>{
        UserModel7.find({})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))

    })
    app.get('/getUser8/:id',(req,res)=>{
        const id=req.params.id;
        UserModel7.findById({_id:id})
        .then(users8=>res.json(users8))
        .catch(err=>res.json(err))
    })
    app.post('/create8',(req,res)=>{
        UserModel7.create(req.body)
        .then(users8=>res.json(users8))
        .catch(err=>res.json(err))
    })
    app.put('/update8/:id',(req,res)=>{
        const id=req.params.id;
        UserModel7.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users8=>res.json(users8))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser8/:id',(req,res)=>{
        const id=req.params.id;
        UserModel7.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    app.post('/testing',(req,res)=>{
        Siva.create(req.body)
        .then(user=>res.json(user))
        .catch(err=>console.log(err))
    })


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sivamaniramayanam7036@gmail.com',
          pass: 'gjrm tarz sjgg sqtr'
        }
      });
      const Sivamani=()=>{
    
      var mailOptions = {
        from: 'sivamaniramayanam7036@gmail.com',
        to:"sivamaniramayanam2002@gmail.com",
        subject: 'Hostel Management',
        text: 'Thankyou for registering our account'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent sucessfully: ' + info.response);
        }
      });
    }
app.listen(3002,()=>{
    console.log("server is running")
})