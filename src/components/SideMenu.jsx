import React, {useState} from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'


function SideMenu({active, sectionActive}) {
  const [navData, setNavData] = useState(navListData);
  
  const handleNavOnClick = ( id, target ) => {
    const newNavData= navData.map(nav => {
      nav.active=false;
      if(nav._id === id) nav.active=true;
      return nav
    })
    setNavData(newNavData);
    sectionActive(target);
  }

  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#" className="logo">
      <i className="bi bi-dice-4-fill"></i>
        <span className='brand'>Friv</span>
      </a>
        <ul className='nav'>
          {navData.map(item =>(
              <NavListItem 
              key={item._id} 
              item = {item} 
              navOnClick={handleNavOnClick}
              />
            ))}
        </ul>     
    </div>
  )
}

export default SideMenu