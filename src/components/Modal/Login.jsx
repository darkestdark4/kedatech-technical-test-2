import Button from '../Button';
import Input from '../Form/Input';
import FormGroup from '../Form/FormGroup';

import { FaX } from 'react-icons/fa6';

function SignIn({ isActive, onClick }) {
  return (
    <>
      <div className={"absolute top-0 w-full h-full transition duration-300 " + (isActive ? "bg-black/50 z-30" : "bg-transparent -z-10")}></div>
      <div className={"fixed w-full h-screen flex justify-center items-center transition duration-400 md:p-0 p-4 " + (isActive ? "opacity-100 z-40" : "opacity-0 -z-10")}>
        <div className="w-[450px] bg-white shadow-md px-8 py-10 rounded-xl">
          <div className="flex justify-end mb-3">
            <FaX className="w-3 h-3 text-gray-500 cursor-pointer" onClick={onClick} />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-display font-bold text-2xl text-center">Login</h1>
            <div className="flex flex-col font-display">
              <p className="text-center">Welcome back! Please sign in to your account to continue using the site.</p>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <FormGroup label="Email">
                <Input type="email" placeholder="Input your name" />
              </FormGroup>
              <FormGroup label="Password">
                <Input type="password" placeholder="Input your password" />
              </FormGroup>
              <FormGroup>
                <Button title="Submit" />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn