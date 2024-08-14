import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Createuser = () => {
    const[name,setName]=useState()
    const[email,setemail]=useState()
    const[mobile,setmobile]=useState()
    const navigate = useNavigate()
    const Submit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/create',{name,email,mobile,designation})
        .then(result=>{console.log(result)
            navigate('/users')
        })
        .catch(err=>console.log(err))
    }
    const [designation, setdesignation] = useState('');
    const handleChange = (event) => {
        setdesignation(event.target.value);
    };
  return (
    <div className="container-fluid" style={{"marginTop":"90px"}} >
    <div className="">
    <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><b>Add Employee Details</b></h2>
        <form onSubmit={Submit}>
            
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Name</h3></label>
                <input type='text' placeholder='Enter-name' className='form-control' onChange={(e)=>setName(e.target.value)}/>

            </div>
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Email</h3></label>
                <input type='text' placeholder='Enter-Rollno' className='form-control'
                onChange={(e)=>setemail(e.target.value)}/>

            </div>
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Mobile No</h3></label>
                <input type='number' placeholder='Enter-Rollno' className='form-control'
                onChange={(e)=>setmobile(e.target.value)}/>

<label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Designation : </h3></label>
            <select id="dropdown" value={designation} onChange={handleChange} style={{marginLeft:"10px"}}>
                <option value="">Choose an option</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
            </select>

            </div>

        
            <div className='mb-2'>
                <button className='btn btn-success'>Add Employee</button>

            </div>
        </form>
    </div>
     
    </div>
  )
}

export default Createuser
