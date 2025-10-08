import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import cat from '../../assets/fi_2111432.png'
import './nav.css'


const Navbar = () => {
    return (
        <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0}  className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li> <NavLink to="/home"  className={({ isActive }) =>
  isActive
    ? "text-blue-500 font-bold"
    : "text-black hover:text-blue-500"
}>Home</NavLink> </li>
        <li> <NavLink  className={({ isActive }) =>
  isActive
    ? "text-blue-500 font-bold"
    : "text-black hover:text-blue-500"
}>Home</NavLink> </li>
        <li> <NavLink  className={({ isActive }) =>
  isActive
    ? "text-blue-500 font-bold"
    : "text-black hover:text-blue-500"
}>Home</NavLink> </li>
      </ul>
    </div>
<div>
     <NavLink> <div className='flex items-center '>
        <img className='w-10 h-10 ' src={logo} alt="" /> <h1 className=" font-bold bg-gradient-to-r from-[#632ee3] to-[#9F62F2] bg-clip-text text-transparent">
  HERO.IO
</h1>

        </div></NavLink>
</div>
    
      </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-[16px]">
      <li> <NavLink   to="/" className={({ isActive }) =>
  isActive
    ? "text-blue-500 font-bold underline"
    : "text-black hover:text-blue-500"
} >Home</NavLink> </li>
      
      <li>  <NavLink  to="/apps" className={({ isActive }) =>
  isActive
    ? "text-blue-500 font-bold underline"
    : "text-black hover:text-blue-500"
} >Apps</NavLink>
        
      </li>
      <li><NavLink   to="/installations" className={({ isActive }) =>
  isActive
    ? "text-blue-500 font-bold underline"
    : "text-black hover:text-blue-500"
}>Instalation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
   <button className='bg-gradient-to-r from-[#632ee3] to-[#9F62F2] px-4 py-3 rounded-lg flex text-white items-center justify-between'> <img className='flex items-center' src={cat} alt="" /> <p className='ml-2 font-semibold'>Contribute</p> </button>
  </div>
</div>
    );
};

export default Navbar;