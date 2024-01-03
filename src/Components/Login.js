import { Link ,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Replace this with your actual login logic
    // For demonstration purposes, let's assume a simple check
    const isLoginSuccessful = username === 'Sritha' && password === '12345';

    if (isLoginSuccessful) {
      
      
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
    }
  };

  return (
    <>
    <div className="body1">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="hh">Login</h2>
        <input type="text" name="username" id="username" placeholder="Name" className="auth" required/>
        <input type="password" name="password" id="pwd" placeholder="Password" className="auth" required/>
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

export default Login;
