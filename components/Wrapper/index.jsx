const Wrapper = ({ className, children, background }) => {
  return (
    <main className={`${className} wrapper`}>
      { !!background && <img src={background} className="wrapper-bg"/>}
      {children}
    </main>
  )
}
export default Wrapper
