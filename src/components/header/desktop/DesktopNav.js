import React, {useState} from 'react'
import {NavItems} from '../../../data/NavItems.js'
import Logo from '../../../assets/svg/Logo.js'


function DesktopNav({setLowerNav}) {

    const [clickedItem, setClickedItem] = useState(null)

function handleNavigationClick(children, menuItem) {
    clickedItem === menuItem ? setClickedItem(null) : setClickedItem(menuItem)
    setLowerNav(children)
}

  return (
    <div className="h-16 bg-white px-3 flex items-center justify-between relative z-10">
        <div className="flex items-center relative">
            <a href="/"><Logo/></a>
            <nav className="main-nav ml-3" aria-label="Main Navigation">
                <ul className="flex">
                    {NavItems.map(item => (
                        <li key={item.name} className={`relative mx-3 ${clickedItem === item.name ? "active" : ""}`}>
                            <button 
                            onClick={() => handleNavigationClick(item.children, item.name)} 
                            type="button" 
                            aria-controls="secondaryNav" 
                            aria-haspopup="true"
                            tabindex="0"
                            >
                            {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className="flex items-center">
            <input className="text-right placeholder:text-black w-32 px-3 rounded-xl mr-2" type="text" placeholder="Search" />
            <button type="submit" className="hover:text-red duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default DesktopNav