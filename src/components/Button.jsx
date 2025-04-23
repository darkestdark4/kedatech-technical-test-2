function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className="bg-white rounded-3xl font-bold md:text-lg text-sm px-5 py-3 cursor-pointer bg-linear-to-bl from-blue-400 to-blue-700 text-white">
      {title}
    </button>
  )
}

export default Button