import logo from '../assets/react.svg'
import ModalLogin from './Modal/Login';

import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [activeModal, setActiveModal] = useState(false)
  const [activeMenuMobile, setActiveMenuMobile] = useState(false)

  const handleModal = () => setActiveModal(!activeModal)
  const toggleMenuMobile = () => setActiveMenuMobile(!activeMenuMobile)

  const MenuMobileButton = () => {
    if (activeMenuMobile) {
      return <FaX className="w-4 h-4 cursor-pointer" onClick={toggleMenuMobile} />
    } else {
      return <GiHamburgerMenu className="w-5 h-5 cursor-pointer" onClick={toggleMenuMobile} />
    }
  }

  return (
    <>
      <div className="px-5 md:py-5 py-0 font-display z-20 absolute w-full top-0 overflow-hidden">
        <div className="flex justify-between items-center py-5 md:px-8 px-5 rounded-xl shadow-md bg-white relative z-10">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="font-black tracking-wider font-display text-2xl">ERPintar</h1>
          </div>
          <div className="flex">
            <div className="md:flex hidden flex-row gap-10 font-bold font-display lg:text-lg text-md items-center">
              <a className="transition duration-300 hover:text-black/50" href="#about-us">About Us</a>
              <a className="transition duration-300 hover:text-black/50" href="#pricing">Pricing</a>
              <a className="transition duration-300 hover:text-black/50" href="#contact">Contact</a>
              <button onClick={handleModal} className="border border-blue-300 px-5 py-2 rounded-lg cursor-pointer transition duration-300 bg-white text-blue-300 hover:bg-blue-300 hover:text-white">
                Login
              </button>
            </div>
            <div className="cursor-pointer md:hidden block">
              <MenuMobileButton />
            </div>
          </div>
        </div>
        <div className={
          "md:hidden flex flex-col gap-8 pt-10 pb-5 px-5 rounded-xl shadow-md bg-white relative z-0 transition duration-300" +
          (activeMenuMobile ? " -translate-y-5" : " -translate-y-full")
        }>
          <a className="transition duration-300 hover:text-black/50" href="#about-us">About Us</a>
          <a className="transition duration-300 hover:text-black/50" href="#pricing">Pricing</a>
          <a className="transition duration-300 hover:text-black/50" href="#contact">Contact</a>
          <div>
            <button onClick={handleModal} className="border border-blue-300 px-5 py-2 rounded-lg cursor-pointer transition duration-300 bg-white text-blue-300 hover:bg-blue-300 hover:text-white">
              Login
            </button>
          </div>
        </div>
      </div>

      <ModalLogin isActive={activeModal} onClick={handleModal} />
    </>
  )
}

export default Header