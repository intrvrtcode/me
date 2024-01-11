import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="gap-x-8 hidden sm:flex">
      <Link className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray'}`} to='/'>
        <span className="text-primary">#</span>home
      </Link>

      <Link className={`hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-white' : 'text-gray'}`} to='/projects'>
        <span className="text-primary">#</span>works
      </Link>

      <Link className={`hover:text-white transition-colors ${location.pathname === '/about-me' ? 'text-white' : 'text-gray'}`} to='/about-me'>
        <span className="text-primary">#</span>about-me
      </Link>

      <Link className={`hover:text-white transition-colors ${location.pathname === '/contacts' ? 'text-white' : 'text-gray'}`} to='/contacts'>
        <span className="text-primary">#</span>contacts
      </Link>
    </nav>
  )
}

export default Navbar;