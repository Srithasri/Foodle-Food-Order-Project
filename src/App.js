
import Home from "./Components/Home";
import './Assets/Css/Home.css'
import Register from "./Components/Register";
import './Assets/Css/Register.css'
import Login from './Components/Login'
import './Assets/Css/Login.css'
import Nav from './Components/Nav'
import {Route,Routes} from 'react-router-dom'
 import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
   
  
    <Nav/>
       <Routes>
     <Route path='/Login' element={<Login/>}/>
    
     <Route path='/Home' element={<Home/>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='/Sidebar' element={<Sidebar/>}/>
     <Route path='/' element={<Home/>}/>

     </Routes> 
    </div>
  );
}

export default App;
