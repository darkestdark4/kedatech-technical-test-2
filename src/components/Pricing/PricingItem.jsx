import PricingPoint from "./PricingPoint"

function PricingItem({ type, price, points, priceType }) {
  let activePrice = 0
  let activePriceText = ""
  if (priceType === "monthly") {
    activePrice = price.month
    activePriceText = "month"
  } else if (priceType === "yearly") {
    activePrice = price.year
    activePriceText = "year"
  }

  return (
    <div className="flex flex-col gap-8 rounded-xl shadow-lg p-10 lg:max-w-[30%] max-w-full">
      <h3 className="font-display font-bold text-xl text-center">{type}</h3>
      <div className="font-display flex flex-col text-center gap-3">
        <span className="font-black text-5xl">${activePrice}</span>
        <span className="md:text-lg/8 text-md/8">per {activePriceText}</span>
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

export default PricingItem