function Input({ type="text", placeholder }) {
  return (
    <input type={type} placeholder={placeholder} className="border border-black/[0.1] px-4 py-3 bg-white" />
  )
}

export default Input