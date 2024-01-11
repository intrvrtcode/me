import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../assets/img/svg/close.svg";

const DrawerNav = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleNavClick = () => {
    setShow(false);
  }

  return (
    <>
      <div onClick={() => setShow(true)} className="flex flex-col gap-y-[6px] justify-center items-end sm:hidden cursor-pointer group">
        <div className="w-7 h-0 border-t-2 border-[#D9D9D9] group-hover:border-white transition-colors"></div>
        <div className="w-5 h-0 border-b-2 border-[#D9D9D9]  group-hover:border-white transition-colors"></div>
      </div>

      <div className={`fixed border-l border-primary top-0 right-0 z-20 w-64 h-full transition-all duration-500 transform translate-x-full bg-background opacity-95 shadow-lg ${show ? 'translate-x-0' : ''} sm:hidden`}>
        <div className="px-4 py-6">
          <div className="flex justify-between mb-10">
            <span className="text-gray text-lg font-semibold">&lt;/&gt;</span>
            <img onClick={() => setShow(false)} className="cursor-pointer" src={close} />
          </div>

          <nav className="flex flex-col gap-y-4">
            <Link onClick={handleNavClick} className={`text-lg hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray'}`} to='/'>
              <span className="text-primary">#</span>home
            </Link>

            <Link onClick={handleNavClick} className={`text-lg hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-white' : 'text-gray'}`} to='/projects'>
              <span className="text-primary">#</span>works
            </Link>

            <Link onClick={handleNavClick} className={`text-lg hover:text-white transition-colors ${location.pathname === '/about-me' ? 'text-white' : 'text-gray'}`} to='/about-me'>
              <span className="text-primary">#</span>about-me
            </Link>

            <Link onClick={handleNavClick} className={`text-lg hover:text-white transition-colors ${location.pathname === '/contacts' ? 'text-white' : 'text-gray'}`} to='/contacts'>
              <span className="text-primary">#</span>contacts
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default DrawerNav;