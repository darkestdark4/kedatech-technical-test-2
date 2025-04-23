import logo from '../assets/react.svg'

function Footer() {
  return (
    <div className="lg:p-18 p-8">
      <div className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between">
        <div>
          <div className="flex gap-3 items-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="font-black tracking-wider font-display text-2xl">ERPintar</h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col font-display font-bold md:gap-20 gap-10">
          <div className="flex flex-col gap-4">
            <a href="#">Features</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#">About Us</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer