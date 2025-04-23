function FormGroup({ children, label }) {
  return (
    <div className="flex flex-col w-full font-display gap-3">
      {(label !== undefined) ? <label htmlFor="" className="font-bold">{label}</label> : <></>}
      {children}
    </div>
  )
}

export default FormGroup