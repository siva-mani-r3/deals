import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Users ()  {
const[users,setusers]=useState([]) 
const [searchTerm, setSearchTerm] = useState('');
useEffect(()=>{
    axios.get('http://localhost:3002/users')
    .then(result=>setusers(result.data))
    .catch(err=>console.log(err))
},[])
const handleDelete =(id)=>{
    axios.delete('http://localhost:3002/deleteUser/'+id)
    .then(res=>{console.log(res)
window.location.reload()})
    .catch(err=>console.log(err))
}
const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div> 
    <div className="container-fluid" >
     
        <div className='' style={{"marginTop":"90px"}}>
        <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}>Employees Data List</h2>
        <Link to='/create'><button className='btn btn-warning'>Add Employee</button></Link>
       

        <input type="text"
                    className="form-control"
                    placeholder="Search by name"
                    style={{ float: "right", width: "300px" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <h2 style={{float:
                    "right",marginRight:"20px",fontFamily:"sans-serif"
                }}>Search</h2>

<table className='table table-hover'>
    <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile No</th>
        <th>Designation</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
        
    {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.designation}</td>
                                        <td>
                                            <Link to={`/update/${user._id}`}>
                                                <button className='btn btn-success'>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <h2>No data found</h2>
                                    </td>
                                </tr>
                            )}
    </tbody>
</table>


    </div >
    </div>
    </div>
  )
}

export default Users
