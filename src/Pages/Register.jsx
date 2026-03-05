import React,{ use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Register = () => {

  const {createUser,setUser}=use(AuthContext);
  const [successMassage,setSuccessMessage]=useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
   //console.log(name,photo,email,password);
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setSuccessMessage("User created successfully");
    })
    .catch(error=>{
      console.log(error);
      setErrorMessage(error.message);
    })

    

  }
    return (
        <div className='flex justify-center mt-10'>
        <div className="card bg-base-100 w-full max-w-sm p-6 ">
            <h2 className='font-bold text-2xl text-center'>Register your account</h2>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <label className="label">Your Name</label>
          <input name='name' type="text" className="input" placeholder="Your Name" />
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </form>
        <p className='font-semibold text-center'>Already have an account ?Please <Link className='text-secondary' to="/auth/login">Login</Link></p>
        {
          successMassage && <p className='text-green-500 text-center font-bold'>{successMassage}</p>
        }
        {
          errorMessage && <p className='text-red-500 text-center font-bold'>{errorMessage}</p>
        }
      </div>
    </div>
    </div>
    );
};

export default Register;