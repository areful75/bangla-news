import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const [successMassage,setSuccessMessage]=useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {loginUser}=use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;

    //console.log(email,password);
    loginUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setSuccessMessage("Login successful");
    })
    .catch(error=>{
      console.log(error);
      setErrorMessage(error.message);
    })
  }
    return (
        <div className='flex justify-center mt-10'>
        <div className="card bg-base-100 w-full max-w-sm p-6 ">
            <h2 className='font-bold text-2xl text-center'>Login your account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </form>
        <p className='font-semibold text-center'>Dont’t Have An Account ? <Link className='text-secondary' to="/auth/register">Register</Link></p>
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

export default Login;