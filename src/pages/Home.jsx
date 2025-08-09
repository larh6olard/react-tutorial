// import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-blue-300 h-[550px] text-center font-inter">
        <h1 className="text-6xl font-semibold pt-42">Welcome to <br /> Prime Tech Academy</h1>
        <div className="mt-7 space-x-5 font-medium">
          <button type="button" className="border border-gray-500 py-2 px-4 rounded-lg text-black/80 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">Explore</button>
          <button type="button" className="border border-gray-500 py-2 px-4 rounded-lg text-black/80 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">Login</button>
        </div>
      </div>
      
    </div>
  )
}

export default Home