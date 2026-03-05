import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const userInfo=use(AuthContext);
   // console.log(userInfo.name);

    return (
    //     <div className="navbar  px-0">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
    //         </div>
    //         <ul
    //           tabIndex="-1"
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    //           <li><a>Item 1</a></li>
    //           <li>
    //             <a>Parent</a>
    //             <ul className="p-2">
    //               <li><a>Submenu 1</a></li>
    //               <li><a>Submenu 2</a></li>
    //             </ul>
    //           </li>
    //           <li><a>Item 3</a></li>
    //         </ul>
    //       </div>
    //       {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         <li><a>Item 1</a></li>
    //         <li>
    //           <details>
    //             <summary>Parent</summary>
    //             <ul className="p-2 bg-base-100 w-40 z-1">
    //               <li><a>Submenu 1</a></li>
    //               <li><a>Submenu 2</a></li>
    //             </ul>
    //           </details>
    //         </li>
    //         <li><a>Item 3</a></li>
    //       </ul>
    //     </div>
    //     <div className="navbar-end ">
    //       <a className="btn ">Button</a>
    //     </div>
    //   </div>
    <div className='flex items-center justify-between py-5'>
        <div>

        </div>
        <div className="nav flex gap-5 text-accent">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>


        </div>
        <div className="login-btn flex gap-5">
            <img src={user} alt="" />
        <Link to="/auth/login" ><button className='btn btn-primary px-10'>Login</button></Link>
        </div>
    </div>
    );
};

export default Navbar;