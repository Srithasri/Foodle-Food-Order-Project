// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {useNavigate} from 'react-router-dom'
// function Register()
// {
//     const navigate=useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevents the default form submission behavior
        
    
//         // Replace this with your actual login logic
//         // For demonstration purposes, let's assume a simple check
       
         
//         toast.success('Registered Succesfully!', {
//             position: "bottom-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//             });
//             setTimeout(()=>{

//                 navigate('/Login');
//                 },2000);
       
//       };
//     return(
//         <>
//         <div class="body2">
        
    //     <form className = "container1" onSubmit={handleSubmit}>
    //     <h3 className="hh1">Sign Up</h3>
    //     <input type="text" name="username" id="username" placeholder="Name" className="auth1" required/>
    //     <input type="number" name="" id="" placeholder="phone no" className="auth1" required/>
    //     <input type="email" name="" id="" placeholder="email" className="auth1" required/>
    //     <input type="password" name="" id="pwd" placeholder="password" className="auth1" required/>
        
    //     <input type="submit" value="Register" className="btn" />
        
    // </form>

//         </div>
//         <ToastContainer
// position="bottom-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="colored"
// />
//         </>
//     )
// }
// export default Register
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Carosel from '../Assests/Images/wonderBloom.webp';
// import NavBar from '../Components/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
      })


    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
      }

    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.password === confirmPassword) {
            axios.post('http://localhost:8080/api/v1/user/save', data)
                .then(response => {
                    console.log("Success "+ response);
                    navigate('/login');
                    setData({});
                    setConfirmPassword("");
                })
                .catch(error => {
                    toast.error('Email already registered!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                });
        } else {
            toast.error('Incorrect Username/Password!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setData({});
            setConfirmPassword("");
        }
    };

    return (
    //     <>
    //         <NavBar />
    //         <div className='loginBody'>
    //             <div className="registerWrapper">
    //                 <div className="register">
    //                     <form action="#" className="registerF" onSubmit={handleSubmit}>
    //                         <p className="header">Register</p>
    //                         <input type="text" id="name" className="registerInput" placeholder='Username' required  onChange={handleChange} />
    //                         <input type="email" id="email" className="registerInput" placeholder='Email' required onChange={handleChange} />
    //                         <input type="password" id="password" className="registerInput" placeholder='Password' required onChange={handleChange} />
    //                         <input type="password" id="passCR" className="registerInput" placeholder='Confirm Password' required value={confirmPassword} onChange={handleConfirmPasswordChange} />
    //                         <input type="submit" id="submitR" className="buttonR" value="Register" />
    //                     </form>
                        <>
                               <div class="body2">
                        <form action="#" className = "container1" onSubmit={handleSubmit}>
        <h3 className="hh1">Sign Up</h3>
        <input type="text" name="username" id="username" placeholder="Name" className="auth1" required onChange={handleChange}/>
        <input type="number" name="" id="" placeholder="phone no" className="auth1" required onChange={handleChange}/>
        <input type="email" name="" id="" placeholder="email" className="auth1" required onChange={handleChange}/>
        <input type="password" name="" id="pwd" placeholder="password" className="auth1" required onChange={handleChange}/>
        
        <input type="submit" value="Register" className="btn" />
        
    </form>
                    </div>
                    {/* <div className="carosel">
                        <img src={Carosel} alt='Img' />
                    </div>
                </div> */}
            {/* </div> */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default Register;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// const Register = () => {
//     const navigate = useNavigate();

//     const [data, setData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setData({ ...data, [e.target.id]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axios.post('http://localhost:8080/api/v1/user/save', data)
//             .then(response => {
//                 console.log("Success "+ response);
//                 toast.success('Registered Successfully!', {
//                     position: "bottom-right",
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "dark",
//                 });
//                 navigate('/login');
//             })
//             .catch(error => {
//                 toast.error('Something went wrong!', {
//                     position: "bottom-right",
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "dark",
//                 });
//             });
//     };

//     return (
//         <>
//             <div className="body2">
//                 <form className="container1" onSubmit={handleSubmit}>
//                     <h3 className="hh1">Sign Up</h3>
//                     <input type="text" id="name" placeholder="Name" className="auth1" required onChange={handleChange}/>
//                     <input type="email" id="email" placeholder="Email" className="auth1" required onChange={handleChange}/>
//                     <input type="password" id="password" placeholder="Password" className="auth1" required onChange={handleChange}/>
//                     <input type="submit" value="Register" className="btn" />
//                 </form>
//             </div>
//             <ToastContainer
//                 position="top-center"
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             />
//         </>
//     );
// };

// export default Register;
