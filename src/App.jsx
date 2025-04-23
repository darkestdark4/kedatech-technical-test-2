import bannerImage from './assets/undraw_data-processing_z2q6.svg'

import Header from './components/Header'
import Footer from './components/Footer';
import Button from './components/Button';
import Pricing from './components/Pricing';
import Input from './components/Form/Input';
import KeyFeature from './components/KeyFeature'
import Textarea from './components/Form/Textarea';
import FormGroup from './components/Form/FormGroup';
import PriceButton from './components/Pricing/PriceButton';

import { useEffect, useState } from 'react';
import { IoAnalytics } from "react-icons/io5";
import { TbAutomation } from "react-icons/tb";
import { GrIntegration } from 'react-icons/gr';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [priceType, setPriceType] = useState("monthly")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [btnScrollTop, setBtnScrollTop] = useState(false)

  const handlePriceType = (val) => setPriceType(val)

  const handleScroll = () => {
    const position = window.pageYOffset; // get scroll position value
    setScrollPosition(position)
  }
  
  // function for scroll to top with smooth transition
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // dummy data for key feature in about us section
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

  // dummy data for pricing
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

  useEffect(() => {
    // set scroll position value when user scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // set button scroll top active when scroll position > 600
    if (scrollPosition > 600) {
      setBtnScrollTop(true)
    } else {
      setBtnScrollTop(false)
    }
  }, [scrollPosition])

  return <>
    <div className="flex flex-col lg:gap-0 gap-10 relative">
      <Header />

      <div className="lg:p-18 p-8" id="home">
        <div className="bg-blue-200 w-[400px] h-[400px] absolute -left-10 -top-20" style={{ borderRadius: '34% 54% 68% 30% / 32% 58% 42% 47%' }}></div>
        <div className="w-full relative z-10 flex lg:flex-row flex-col items-center justify-between gap-10 md:mt-28 mt-20">
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
              <Button title="Get Started" />
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
              <PriceButton
                text="Monthly"
                onSelect={() => handlePriceType("monthly")}
                isActive={priceType === "monthly" ? true : false}
              />
              <PriceButton
                text="Yearly"
                onSelect={() => handlePriceType("yearly")}
                isActive={priceType === "yearly" ? true : false}
              />
            </div>
            <div className="flex lg:flex-row flex-col justify-center gap-10 font-display">
              {pricingData.map((item) => {
                return <Pricing {...item} key={item.id} priceType={priceType} />
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
            <FormGroup label="Name">
              <Input type="text" placeholder="Input your name" />
            </FormGroup>
            <FormGroup label="Email">
              <Input type="email" placeholder="Input your name" />
            </FormGroup>
            <FormGroup label="Message">
              <Textarea />
            </FormGroup>
            <FormGroup>
              <Button title="Send Message" />
            </FormGroup>
          </div>
        </div>
      </div>

      <ScrollToTop onClick={scrollTop} isActive={btnScrollTop} />

      <Footer />
    </div>
  </>
}

export default App