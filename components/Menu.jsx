import { useState } from 'react'

const Menu = () => {
  const [isOpened, setIsOpened] = useState(true)

  return (
    <nav className={!isOpened && 'menubar-opened'}>
      <div className="menubar">
        <div className="icons">
          <i
            className={`icon-menu ${isOpened ? '' : 'icon-closed'} `}
            onClick={() => setIsOpened(!isOpened)}>
            <span></span>
          </i>
        </div>
      </div>
      <ul className={`menu ${isOpened ? 'close' : 'open'}`}>
        <li className="menu-link">
          <a href="#0" className="text-item">
                        Mostra
          </a>
        </li>
        <li className="menu-link sub">
          <a href="#0" className="text-item">
                        Filmes<span className="icon"></span>
          </a>
          <ul className="submenu">
            <li className="sub-item">
              <a href="#0">Da 5 Bloods</a>
            </li>
            <li className="sub-item">
              <a href="#0">Malcom X</a>
            </li>
            <li className="sub-item">
              <a href="#0">BlacKKKlansman</a>
            </li>
          </ul>
        </li>
        <li className="menu-link sub">
          <a href="#0" className="text-item">
                        Programação<span className="icon"></span>
          </a>
          <ul className="submenu">
            <li className="sub-item">
              <a href="#0">Dia 23</a>
            </li>
            <li className="sub-item">
              <a href="#0">Dia 24</a>
            </li>
            <li className="sub-item">
              <a href="#0">Dia 25</a>
            </li>
          </ul>
        </li>
        <li className="menu-link">
          <a href="#0" className="text-item">
                        Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
