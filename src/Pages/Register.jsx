import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center mt-10'>
        <div className="card bg-base-100 w-full max-w-sm p-6 ">
            <h2 className='font-bold text-2xl text-center'>Register your account</h2>
      <div className="card-body">
        <form >
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Your Name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 w-full">Login</button>
        </form>
        <p className='font-semibold text-center'>Already have an account ?Please <Link className='text-secondary' to="/auth/login">Login</Link></p>
      </div>
    </div>
    </div>
    );
};

export default Register;