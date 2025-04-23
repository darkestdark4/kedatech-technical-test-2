import { FaCheck } from "react-icons/fa";

function PricingPoint({ text }) {
  return (
    <div className="flex items-center gap-4">
      <FaCheck className="w-4 h-4" />
      <span>{text}</span>
    </div>
  )
}

export default PricingPoint