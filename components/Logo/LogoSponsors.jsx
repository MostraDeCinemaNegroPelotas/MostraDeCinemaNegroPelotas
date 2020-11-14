const LogoSponsors = () => {
  const sponsors = [
    {
      src: '/ca.png'
    },
    {
      src: '/pet.png'
    },
    {
      src: '/pet.png'
    }
  ]

  const renderSponsors = () => sponsors.map((sponsor) => <img src={sponsor.src} />)

  return (
    <div className="logo-sponsors">
      <h5> apoio </h5>
      { renderSponsors() }
    </div>
  )
}

export default LogoSponsors
