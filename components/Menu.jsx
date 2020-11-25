import { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { menu } from 'Redux/menu'

const Menu = () => {
  const [isOpened, setIsOpened] = useState(true)
  const menuData = useSelector(menu);

  const createLinks = () => { 
    return ( 
      menuData.map((data, index) => (
        <li key={index} className="menu-link">
          <Link href={data.href}>
            <a className="text-item">{data.label}</a>
          </Link>
        </li> 
      ))
    )
  }

  return (
    <nav className={!isOpened ? 'menubar-opened' : undefined}>
      <div className="menubar">
        <div className="icons">
          <i 
            className={`icon-menu ${isOpened ? '' : 'icon-closed'} `}
            onClick={() => setIsOpened(!isOpened)}
          >
            <span></span>
          </i>
        </div>
      </div>
      <ul className={`menu ${isOpened ? 'close' : 'open'}`}>
       {createLinks()}
      </ul>
    </nav>
  )
}

export default Menu
