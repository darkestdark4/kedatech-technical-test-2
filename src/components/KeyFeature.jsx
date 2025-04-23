function KeyFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-3 lg:max-w-[25%] max-w-full">
      <div className="bg-blue-200 rounded-lg w-12 h-12 flex justify-center items-center mb-3">
        {icon}
      </div>
      <div className="text-center flex flex-col gap-3">
        <h3 className="font-display font-bold text-xl">{title}</h3>
        <p className="text-md/8">{description}</p>
      </div>
    </div>
  )
}

export default KeyFeature