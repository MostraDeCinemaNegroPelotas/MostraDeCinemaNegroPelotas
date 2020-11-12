import React, { useState } from 'react'
import Link from 'next/link'
import Menus from './Menus'

const Menu = () => {
  const [isOpened, setIsOpened] = useState(true)

  const createMenus = () => (
    <ul className={`menu ${isOpened ? 'close' : 'open'}`}>
      {Menus.map((menu, index) => (
        <li key={index} className="menu-link">
          <Link href={menu.href}>
            <a className="text-item">{menu.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav>
      <div className="menubar">
        <div className="icons">
          <i
            className={`icon-menu ${isOpened ? '' : 'icon-closed'} `}
            onClick={() => setIsOpened(!isOpened)}>
            <span></span>
          </i>
        </div>
      </div>
      { createMenus() }
    </nav>
  )
}

export default Menu
