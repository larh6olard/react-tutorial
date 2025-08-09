import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <header className='flex justify-between p-4 bg-blue-500 text-white font-medium text-xl'>
        <h1 className='my-auto'><Link to="/">Prime Academy</Link></h1>
        <nav className='flex space-x-8'>
          <Link to="/explore" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>Explore</Link>
          <Link to="/contact" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>Contact</Link>
          <Link to="/about" className='hover:bg-blue-600 py-2 px-4 transition-colors rounded-lg'>About</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header