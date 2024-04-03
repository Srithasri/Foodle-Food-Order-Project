
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// function Login() {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/user/login', formData);
//       if (response.data.success) {
//         toast.success('Logged in successfully!', { position: "bottom-right" });
//         navigate('/Sidebar');
//       } else {
//         setErrors({ ...errors, username: 'Invalid credentials' });
//         toast.error('Login failed. Please check your credentials.', { position: "bottom-right" });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Something went wrong!', { position: "bottom-right" });
//     }
//   };

//   return (
//     <>
//       <div className="body1">
//         <form className="container" onSubmit={handleSubmit}>
//           <h2 className="hh">Login</h2>
//           <input type="text" name="username" placeholder="Name" className="auth" value={formData.username} onChange={handleChange} />
//           {errors.username && <span className='span-ee'>{errors.username}</span>}
//           <input type="password" name="password" placeholder="Password" className="auth" value={formData.password} onChange={handleChange} />
//           <input type="submit" value="Login" className="btn" />
//         </form>
//       </div>
//       <ToastContainer
//         position="bottom-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/save', formData);
            if (response.data.success) {
                toast.success('Logged in successfully!', { position: "bottom-right" });
                navigate('/Sidebar');
            } else {
                toast.error('Login failed. Please check your credentials.', { position: "bottom-right" });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong!', { position: "bottom-right" });
        }
    };

    return (
        <>
            <div className="body1">
                <form className="container" onSubmit={handleSubmit}>
                    <h2 className="hh">Login</h2>
                    <input type="email" name="email" placeholder="Email" className="auth" value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" className="auth" value={formData.password} onChange={handleChange} />
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
};

export default Login;
