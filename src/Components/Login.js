import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {useRef,useState} from 'react'

function Login() {
  const username= useRef(null);
  const password = useRef(null);
  const [errors,setErrors] =useState({
    username:'',
    password:''
  })
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    
    
    // const username = event.target.username.value;
    // const password = event.target.password.value;

    // Replace this with your actual login logic
    // For demonstration purposes, let's assume a simple check
    const data = {
      username:username.current.value,
      password:password.current.value
    }
    if(data.username.length==0)
    {
       setErrors({...errors,username:'username is empty !'});
    }
    else if(data.username.length <6)
    {
        setErrors({...errors,username: 'min 6 chars'});
    }
    // else if(!emailRegex.test(data.emal))
    // {
    //     setErrors({...errors,email:'invalid username!'});
    // }
    else
    {
        setErrors({...errors,username: ''}); 
    if(data.username === 'Sritha' )

  {
      
      
      toast.success('Logged in', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(()=>{

      navigate('/Sidebar');
      },2000);
      
    } else {
      toast.error('Login Failed.Try Again!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }}
    username.current.value=''
    password.current.value=''

  };

  return (
    <>
    <div className="body1">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="hh">Login</h2>
        <input type="text" name="username" id="username" placeholder="Name" className="auth" ref={username}/>
        {
            errors.username===''?'':
            <span className='span-ee'>{errors.username}</span>
        }
        <input type="password" name="password" id="pwd" placeholder="Password" className="auth" ref={password}/>
        {
            errors.password===''?'':
            <span className='span-ee'>{errors.password}</span>
        }
        <input type="submit" value="Login" className="btn" />
       
      </form>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
}

export default Login
