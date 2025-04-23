import { FaCheck } from "react-icons/fa";

function Pricing({ type, price, points }) {
  const PricingPoint = ({ text }) => {
    return (
      <div className="flex items-center gap-4">
        <FaCheck className="w-4 h-4" />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 rounded-xl shadow-lg p-10 lg:max-w-[30%] max-w-full">
      <h3 className="font-display font-bold text-xl text-center">{type}</h3>
      <div className="font-display flex flex-col text-center gap-3">
        <span className="font-black text-5xl">${price.month}</span>
        <span className="md:text-lg/8 text-md/8">per month</span>
      </div>
      <div className="flex flex-row">
        <button className="p-3 border border-black rounded-xl w-full cursor-pointer transition-all duration:300 hover:bg-black/[0.05] font-bold">
          Get {type}
        </button>
      </div>
      <div className="font-display md:text-lg/8 text-md/8 flex flex-col gap-3">
        {points.map(item => {
          return <PricingPoint text={item} key={item} />
        })}
      </div>
    </div>
  )
}

export default Pricing