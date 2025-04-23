function Section({ children, className, id }) {
  return <div className={"lg:p-18 p-8 " + className} id={id}>
    {children}
  </div>
}

export default Section