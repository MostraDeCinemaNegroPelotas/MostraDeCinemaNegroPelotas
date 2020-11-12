const Wrapper = ({ children, className, margin, padding }) => {
  return (
    <main
      className={className}
      style={{
        margin, padding
      }}
    >
      {children}
    </main>
  )
}

export default Wrapper
