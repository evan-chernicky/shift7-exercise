import React, {useState, useEffect} from 'react'
import SecondaryNav from './SecondaryMobileNav'
import {NavItems} from '../../../data/NavItems.js'
import {languages} from '../../../data/Languages.js'


function PulloutNav({setMobileNav, mobileNav, setNavChildren, navChildren}) {

    const [language, setLanguage] = useState(languages[0])
    const [mainAnimation, setMainAnimation] = useState("invisible")
    const [secondaryAnimation, setSecondsaryAnimation] = useState("invisible")
    const [isSecondaryOn, setIsSecondaryOn] = useState(false)

    //updates animation on main menu on main menu toggle
    useEffect(() => { 
        updateAnimation(mobileNav, setMainAnimation)
    }, [mobileNav])

    //updates animation on secondary menu on main menu toggle
    useEffect(() => { 
        updateAnimation(isSecondaryOn, setSecondsaryAnimation)
    }, [isSecondaryOn])

    //handles animation update dynamically
    function updateAnimation(toggle, setMenuAnimation) {
        if (toggle) {
            setMenuAnimation("slide-in-right")
        } 
        if (toggle === false) {
            setMenuAnimation("slide-out-right")
        } 
    }

    function handleSecondaryNav(children) {
        setNavChildren(children)
        setIsSecondaryOn(true)
    }


  return (
    <div className={`absolute z-10 top-0 left-0 h-screen w-screen flex flex-col bg-white ${mainAnimation}`}>
        <div className="relative bg-black flex items-center justify-between text-white px-3 py-2">
            <span>Menu</span>
            <button onClick={() => setMobileNav(false)} className="hover:text-red focus:text-red duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <div className="h-full relative">
        <SecondaryNav navChildren={navChildren} secondaryAnimation={secondaryAnimation} setIsSecondaryOn={setIsSecondaryOn}/>
            <nav>
                <ul className="border-y">
                    {NavItems.map(item => (
                        <li key={item.name}>
                            <button 
                            className="w-full p-3 border-y flex justify-between items-center hover:text-red focust-text-red duration-300"
                            onClick={() => handleSecondaryNav(item.children)} 
                            type="button" 
                            aria-controls="secondaryNav" 
                            aria-haspopup="true"
                            tabindex="0"
                            >
                                <span className="uppercase font-bold">{item.name}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul className="bg-gray-100 px-3 py-8 h-full">
                <li className="pb-5">
                    <button aria-label="support" className="flex items-center hover:text-red focus:text-red duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="px-1">Help</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>                  
                    </button>
                </li>
                <li className="pb-5">
                    <button aria-label="location" className="flex items-center hover:text-red focus:text-red duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>  
                        <span className="px-1">Where to Buy/Rent</span>                
                    </button>
                </li>
                <li className="pb-5">
                    <button aria-label="saftey" className="flex items-center hover:text-red focus:text-red duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>   
                        <span className="px-1">Saftey</span>               
                    </button>
                </li>
                <li>
                    <button className="pl-1 flex flex-row items-center h-full hover:text-red focus:text-red duration-300" aria-label="select language">
                        {language.icon}
                        <span className="pl-1">{language.abbreviation}</span>   
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default PulloutNav