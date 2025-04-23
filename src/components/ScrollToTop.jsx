import { FaArrowUp } from 'react-icons/fa6';

function ScrollToTop({ onClick, isActive }) {
  return <div
    className={
      "w-15 h-15 bg-blue-600 rounded-full fixed bottom-5 right-4 flex justify-center items-center transition duration-300"
      + (isActive ? " opacity-100 z-20" : " opacity-0 z-0")
    }
    onClick={onClick}
  >
    <FaArrowUp className="w-5 h-5 text-white cursor-pointer" />
  </div>
}

export default ScrollToTop