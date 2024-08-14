import React from 'react'
import { useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Updateuser = () => {
    const {id}=useParams()
    const[name,setName]=useState()
    const[email,setemail]=useState()
    const[mobile,setmobile]=useState()
    const[designation,setdesignation]=useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3002/users/getUser/'+id)
        .then(result=>{console.log(result)
            setName(result.data.name)
            setemail(result.data.email)
            setmobile(result.data.mobile)
            setdesignation(result.data.designation)
        }
    )
        .catch(err=>console.log(err)) 
    },[])
    const handleChange = (event) => {
        setdesignation(event.target.value);
    };
    const Update=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3002/update/'+id,{name,email,mobile,designation})
        .then(result=>{console.log(result)
            navigate('/users')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="container-fluid" style={{"marginTop":"90px"}} >
    <div className="">
    <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><b>Update Student Details</b></h2>
        <form onSubmit={Update}>
            <div className='mb-2'>
                <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Name</h3></label>
                <input type='text'  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter-name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Email</h3></label>
                <input type='text' onChange={(e)=>setemail(e.target.value)} value={email} placeholder='Enter-Email' className='form-control'/>
            </div>

            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Mobile No</h3></label>
                <input type='number' placeholder='Enter-Mobile No' className='form-control'
                onChange={(e)=>setmobile(e.target.value)} value={mobile}/>

<label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Designation : </h3></label>
            <select id="dropdown" value={designation} onChange={handleChange} style={{marginLeft:"10px"}} >
                <option value="">Choose an option</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
            </select>

            </div>
            <div className='mb-2'>
                <button className='btn btn-success'>Update</button>
            </div>

        </form>
    </div>
    </div>
  )
}
export default Updateuser
