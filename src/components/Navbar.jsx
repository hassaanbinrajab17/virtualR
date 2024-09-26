import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react';

const navItems = [
  {label: 'Home', href:'#'},
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];
function Navbar() {
  const [Open, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen(!Open);
  };
  return (
    
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
    <div className="container px-4 x-auto relative text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className='h-10 w-10 mr-2' src={logo} alt="Logo here"  />
          <span className='text-xl tracking-tight'>VirtualR</span>
        </div>
        <ul className='hidden lg:flex ml-14 space-x-12'>
          {navItems.map((item, index)=> {
            return (
            <li key={index}>
              <a href={item.href} >{item.label}</a>
            </li>
            )
          })}
        </ul>
        <div className="hidden lg:flex justify-center space-x-12 items-center">
          <a href="#" className='px-2 py-2 border rounded-md hover:scale-110'>Sign in</a>
          <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-2 rounded-md hover:scale-110'>
            Create an account
          </a>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
<button onClick={toggleNavbar}>
  {Open ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>
  }
</button>
        </div>
      </div>
      {Open && (
      <div className="fixed-right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
<ul>
  {navItems.map((item,index)=> {
    return (
<li key={index} className='py-4'>
<a id='hero' href={item.href}>{item.label}</a>
</li>
    )
  })}
</ul>
<div className="flex space-x-6">
  <a href="" className='py-2 px-3 border rounded-md'>sign in</a>
  <a href="" className='py-2 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
</div>
 </div>
      )}
    </div>
    </nav>
    
  )
}

export default Navbar