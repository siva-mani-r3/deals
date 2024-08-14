import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Rooms from './Rooms';
import Signup from './Signup';
import Login from './Login';
import Addstudent from './Addstudent';
import Users from './Users';
import Room1 from './Room1';
import Room12 from './Room12';
import Room14 from './Room14';


function App() {
  return (
    <div>
  <BrowserRouter>
    <Routes>
      <Route path='/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22' element={ <Home/>}/>
      <Route path='/rooms' element={<Rooms/>} style={{"marginTop":"90px"}}/>
      <Route path='/room1' element={<Addstudent/>}/>
      <Route path='/' element={ <Signup/>}/>
      <Route path='/available' element={<Users/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users'  element={<Room1/>}/>
      <Route path='/create' element={<Room12/>}/>
      <Route path='/update/:id' element={<Room14/>}/>
     
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
