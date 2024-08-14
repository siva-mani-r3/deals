import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
import './App.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Navbar1 = () => {
  const navigate = useNavigate()
  const Logout=(e)=>{
    e.preventDefault();
        navigate('/login')
}
// const [users, setUsers] = useState([]);

// const [userName, setUserName] = useState(''); 

//   useEffect(() => {
//     axios.get('http://localhost:3002/users') 
//       .then(result => {
//         setUsers(result.data);
//         if (result.data.length > 0) {
//           setUserName(result.data[users.length-1].name); 
//         }
//       })
//       .catch(err => console.log(err));
//   }, []);


    return (
    <Navbar expand="lg fixed-top" style={{"background":"turquoise"}}>
<Container fluid>
  <Navbar.Brand href="https://www.dealsdray.com/" target='_blank'><img src='logo1.jpeg'alt='siva' style={{"width":"70px","height":"50px",borderRadius:"10px"}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
   <Button   style={{"boxShadow":"0px 1px 5px 0px darkblue","backgroundColor":"white","color":"black","margin":"7px"}} ><Link to='/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22' style={{"textDecoration":"none","color":"black"}}>Home</Link></Button>
 <Button  style={{"boxShadow":"0px 1px 5px 0px darkblue","backgroundColor":"white","color":"black","margin":"7px"}}><Link to='/users' style={{"textDecoration":"none","color":"black"}}>Employees</Link></Button>

    </Nav>
    <Form className="d-flex">
     {/* name here */}
     {/* <h2>
      {userName}
     </h2> */}
   
      <Button variant="outline-danger" style={{"marginLeft":"10px"}} onClick={Logout}>Logout</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}
export default Navbar1
