import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header className='flex justify-between py-3 px-6 bg-blue-500 text-white font-medium text-lg'>
        <h1 className='my-auto text-3xl font-arizonia'><Link to="/">Prime Tech Academy</Link></h1>
        <nav className='my-auto space-x-6'>
          <Link to="/explore" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>Explore</Link>
          <Link to="/contact" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>Contact</Link>
          <Link to="/about" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>About</Link>
        </nav>
        <nav className='flex space-x-8'>
          <Link to="/about" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>Login</Link>
          <Link to="/about" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>Sign Up</Link>
        </nav>
      </header>
      <Outlet />
      <footer className='text-center p-5 text-lg bg-gray-800 text-white'>
        Prime Tech Studio &copy;2025
      </footer>
    </div>
  )
}

export default Layout