import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
function Register()
{
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        
    
        // Replace this with your actual login logic
        // For demonstration purposes, let's assume a simple check
       
         
        toast.success('Registered Succesfully!', {
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

                navigate('/Login');
                },2000);
       
      };
    return(
        <>
        <div class="body2">
        
        <form className = "container1" onSubmit={handleSubmit}>
        <h3 className="hh1">Sign Up</h3>
        <input type="text" name="username" id="username" placeholder="Name" className="auth1" required/>
        <input type="number" name="" id="" placeholder="phone no" className="auth1" required/>
        <input type="email" name="" id="" placeholder="email" className="auth1" required/>
        <input type="password" name="" id="pwd" placeholder="password" className="auth1" required/>
        
        <input type="submit" value="Register" className="btn" />
        
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
    )
}
export default Register