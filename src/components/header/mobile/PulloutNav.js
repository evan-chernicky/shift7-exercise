import React from 'react'
import {NavItems} from '../../../data/NavItems.js'

function PulloutNav({setMobileNav, mobileNav}) {

    const animation = mobileNav ? "slide-in-right" : "slide-out-right"
    const visibility = mobileNav === null ? "invisible" : ""

    console.log(mobileNav)


  return (
    <div className={`absolute z-10 top-0 left-0 h-screen w-screen flex flex-col bg-white ${visibility} ${animation}`}>
        <div className="bg-black flex items-center justify-between text-white px-3 py-2">
            <span>Menu</span>
            <button onClick={() => setMobileNav(false)} className="hover:text-red focus:text-red duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <nav>
            <ul>
                {NavItems.map(item => (
                    <li key={item.name}>
                        <button className="w-full p-3 border-y">
                            <span>{item.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>

    </div>
  )
}

export default PulloutNav