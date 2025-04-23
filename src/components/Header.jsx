import logo from '../assets/react.svg'

import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="p-5 font-display z-20 fixed w-full top-0">
      <div className="flex justify-between items-center py-5 md:px-8 px-5 rounded-xl shadow-md bg-white">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="font-black tracking-wider font-display text-2xl md:block hidden">ERPintar</h1>
        </div>
        <div className="flex">
          <ul className="md:flex hidden flex-row gap-10 font-bold font-display lg:text-lg text-md">
            <li className="cursor-pointer">
              <a href="#about-us">
                About Us
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#pricing">
                Pricing
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#contact">
                Contact
              </a>
            </li>
            <li className="cursor-pointer">Login</li>
          </ul>
          <div className="cursor-pointer md:hidden block">
            <GiHamburgerMenu className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header