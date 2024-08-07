import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
const Roomelements = () => {
    return (
            <div className='container-fluid ' style={{"marginTop":"80px"}}>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <div class="card" style={{ "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px" }}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                            <h2 class="card-title">Room 1</h2>
                            <p class="card-text">First floor room 1</p>
                           <Link to='/users'><a href="#" class="btn btn-primary">See Details</a></Link> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card" style={{  "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px"}}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                        <h2 class="card-title">Room 2</h2>
                            <p class="card-text">First floor room 2</p>
                           <Link to='/users2'><a href="#" class="btn btn-primary">See Details</a></Link> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card" style={{ "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px" }}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                        <h2 class="card-title">Room 3</h2>
                            <p class="card-text">First floor room 3</p>
                           <Link to='/users3'><a href="#" class="btn btn-primary">See Details</a></Link> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card" style={{  "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px"}}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                        <h2 class="card-title">Room 4</h2>
                            <p class="card-text">First floor room 4</p>
                           <Link to='/users4'><a href="#" class="btn btn-primary">See Details</a></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <div class="card" style={{ "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px" }}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                            <h2 class="card-title">Room 5</h2>
                            <p class="card-text">Second floor room 5</p>
                           <Link to='/users5'><a href="#" class="btn btn-primary">See Details</a></Link> 
                        </div>
                    </div>

                </div>
                <div className='col-md-3'>
                    <div class="card" style={{  "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px"}}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                        <h2 class="card-title">Room 6</h2>
                            <p class="card-text">Second floor room 6</p>
                           <Link to='/users6'><a href="#" class="btn btn-primary">See Details</a></Link> 
                        </div>
                    </div>

                </div>
                <div className='col-md-3'>
                    <div class="card" style={{ "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px" }}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                        <h2 class="card-title">Room 7</h2>
                            <p class="card-text">Second floor room 7</p>
                           <Link to='/users7'><a href="#" class="btn btn-primary">See Details</a></Link> 
                           
                        </div>
                    </div>

                </div>
                <div className='col-md-3'>
                    <div class="card" style={{  "boxShadow":"3px 3px 3px 3px silver","marginTop":"10px"}}id='container'>
                        <img class="card-img-top" src="hostel.jpeg" alt="Card image" />
                        <div class="card-body">
                        <h2 class="card-title">Room 8</h2>
                            <p class="card-text">second floor room 8</p>
                           <Link to='/users8'><a href="#" class="btn btn-primary">See Details</a></Link> 
                            
                        </div>
                    </div>
                </div>      
            </div>
             </div>    
    )
}

export default Roomelements
