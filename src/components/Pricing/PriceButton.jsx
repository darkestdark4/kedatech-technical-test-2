function PriceButton({ onSelect, text, isActive }) {
  return <>
    <span onClick={onSelect} className={
      "shadow-md rounded-2xl px-5 py-2 cursor-pointer font-bold transition duration-300 " +
      (isActive ? "bg-linear-to-bl from-blue-400 to-blue-700 text-white" : "bg-white")
    }>
      {text}
    </span>
  </>
}

export default PriceButton