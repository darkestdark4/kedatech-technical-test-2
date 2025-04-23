import bannerImage from './assets/undraw_data-processing_z2q6.svg'

import Header from './components/Header'
import Pricing from './components/Pricing';
import KeyFeature from './components/KeyFeature'

import { IoAnalytics } from "react-icons/io5";
import { TbAutomation } from "react-icons/tb";
import { GrIntegration } from 'react-icons/gr';

function App() {
  const keyFeature = [
    {
      id: 1,
      title: "Unified Business Intelligence",
      description: "Transform scattered data into actionable insights with our centralized dashboard. Get real-time visibility into operations, finances, and performance metrics in one place, enabling smarter decision-making and identifying growth opportunities instantly.",
      icon: <IoAnalytics />
    },
    {
      id: 2, 
      title: "Seamless Process Automation",
      description: "Eliminate repetitive tasks and reduce errors with intelligent workflow automation. Our solution streamlines everything from inventory management to invoicing, freeing your team to focus on strategic priorities.",
      icon: <TbAutomation />
    },
    {
      id: 3,
      title: "Scalable Integration Framework",
      description: "Connect your entire business ecosystem with our flexible integration capabilities. ERPintar works seamlessly with your existing tools and systems, creating a unified platform that eliminates information silos and grows with your business.",
      icon: <GrIntegration />
    }
  ]

  const pricingData = [
    {
      id: 1,
      type: "Basic",
      price: 
      {
        month: 2,
        year: 21
      },
      points: [
        "Record incoming inventory",
        "Record outgoing inventory",
        "Calculate profits"
      ]
    },
    {
      id: 2,
      type: "Business",
      price: {
        month: 5,
        year: 55
      },
      points: [
        "Record incoming inventory",
        "Record outgoing inventory",
        "Comprehensive profit tracking",
        "Advanced sales analytics with charts",
        "24/7 Customer support"
      ]
    },
    {
      id: 3,
      type: "Entrepreneur",
      price: {
        month: 9,
        year: 100
      },
      points: [
        "Record incoming inventory",
        "Record outgoing inventory",
        "Comprehensive profit tracking",
        "Advanced sales analytics with charts",
        "24/7 Customer support",
        "Export data to Excel",
        "AI-powered revenue prediction"
      ]
    }
  ]

  return <>
    <div className="flex flex-col lg:gap-0 gap-10">
      <Header />
      <div className="lg:p-18 p-8 relative top-0" id="home">
        <div className="bg-blue-200 w-[400px] h-[400px] absolute -left-10 -top-20" style={{ borderRadius: '34% 54% 68% 30% / 32% 58% 42% 47%' }}></div>
        <div className="w-full relative z-10 flex lg:flex-row flex-col items-center justify-between gap-10 mt-28">
          <div className="lg:w-[40%] w-[100%] font-display flex flex-col gap-8">
            <span className="lg:text-md text-sm">One Platform. Complete Control. Better Results.</span>
            <div className="flex flex-col gap-8">
              <h2 className="font-black md:text-5xl/14 text-3xl/10">Transform Your Business Operations with Intelligent Enterprise Solutions</h2>
              <p className="md:text-lg/8 text-md/8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil labore, voluptatibus impedit reiciendis neque mollitia numquam saepe,
                eligendi in quibusdam sed nemo! Aspernatur eum corporis distinctio molestiae, atque natus?
              </p>
            </div>
            <div>
              <button className="bg-white rounded-3xl font-bold md:text-lg text-sm px-5 py-3 cursor-pointer bg-linear-to-bl from-blue-400 to-blue-700 text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] w-[100%] flex justify-center h-auto">
            <img src={bannerImage} alt="banner image" className="w-[80%]" />
          </div>
        </div>
      </div>
      <div className="lg:p-18 p-8 bg-black/[.03]" id="about-us">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-5 text-center lg:w-[80%] w-full">
            <h2 className="font-display font-bold text-3xl/10">Your Partner in Business Transformation</h2>
            <p className="font-display md:text-lg/8 text-md/8">
              Since 2020, we've been reimagining what ERP software can be—more intuitive, more connected, and more impactful for everyday operations. What sets us apart is our human-centered approach to technology, we've built ERPintar based on real-world business needs rather than technical specifications. Today, our platform serves 120 clients across Indonesia, empowering them with the tools and insights needed to make smarter decisions and achieve sustainable growth.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-5 gap-8">
            {keyFeature.map(item => {
              return <KeyFeature {...item} key={item.id} />
            })}
          </div>
        </div>
      </div>
      <div className="lg:p-18 p-8" id="pricing">
        <div className="flex flex-col items-center gap-5">
          <div className="text-center flex flex-col gap-5 font-display">
            <h2 className="font-bold md:text-5xl/14 text-3xl/10">Pricing Plans</h2>
            <p className="md:text-lg/8 text-md/8">Flexible options to match your workflow and goals</p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="flex gap-4 font-display">
              <span className="shadow-md rounded-2xl px-5 py-2 cursor-pointer bg-white font-bold">Monthly</span>
              <span className="shadow-md rounded-2xl px-5 py-2 cursor-pointer bg-white font-bold">Yearly</span>
            </div>
            <div className="flex lg:flex-row flex-col justify-center gap-10 font-display">
              {pricingData.map((item) => {
                return <Pricing {...item} />
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-18 p-8 bg-black/[.03]" id="contact">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-10">
          <div className="flex flex-col gap-5 lg:w-[50%] w-full justify-center">
            <h2 className="font-bold md:text-5xl/14 text-3xl/10">Contact Us</h2>
            <p className="md:text-lg/8 text-md/8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dicta architecto, tenetur asperiores 
              deleniti quia soluta incidunt voluptatibus veniam aliquid id modi totam quas nemo molestias repudiandae.
              Officia, totam error?
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:w-[40%] w-full">
            <div className="flex flex-col w-full font-display gap-3">
              <label htmlFor="" className="font-bold">Name</label>
              <input type="text" placeholder="Input your name" className="border border-black/[0.1] p-4 bg-white" />
            </div>
            <div className="flex flex-col w-full font-display gap-3">
              <label htmlFor="" className="font-bold">Email</label>
              <input type="email" placeholder="Input your email" className="border border-black/[0.1] p-4 bg-white" />
            </div>
            <div className="flex flex-col w-full font-display gap-3">
              <label htmlFor="" className="font-bold">Message</label>
              <textarea name="" className="border border-black/[0.1] p-4 bg-white"></textarea>
            </div>
            <div className="flex flex-col w-full font-display gap-3">
              <button className="bg-white rounded-3xl font-bold md:text-lg text-sm px-5 py-3 cursor-pointer bg-linear-to-bl from-blue-400 to-blue-700 text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App