const UiWrapper = ({ className, children, background }) => {
  return (
    <main className={`${className} ui-wrapper`}>
      { !!background && <img src={background} className="ui-wrapper-bg"/>}
      {children}
    </main>
  )
}
export default UiWrapper
