import React, {useState} from 'react'
import {languages} from '../../../data/Languages.js'

function TopHeader() {

    const [cartNumber, setCartNumber] = useState(0)
    const [language, setLanguage] = useState(languages[0])

  return (
    <div className="w-full flex justify-between text-white h-9 relative z-10">
        <div className="w-full flex justify-between bg-black items-center pr-3">
            <div className="h-full">
                <button className="flex flex-row items-center h-full px-3 hover:bg-red focus:bg-red duration-300" aria-label="select language">
                    {language.icon}
                    <span className="pl-1">{language.abbreviation}</span>   
                </button>
            </div>
            <ul className="flex flex-row fill-white h-full items-center">
                <li className="pl-2">
                    <button aria-label="privacy" className="hover:text-red focus:text-red duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </button>
                </li>
                <li className="pl-2">
                    <button aria-label="saftey" className="hover:text-red focus:text-red duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>                      
                    </button>
                </li>
                <li className="pl-2">
                    <button aria-label="Where to Buy/Rent" className="hover:text-red focus:text-red duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>                   
                    </button>
                </li>
                <li className="pl-2">
                <button aria-label="profile" className="hover:text-red focus:text-red duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                    </button>
                </li>                
            </ul>
        </div>
        <button className="flex flex-row items-center hover:text-black focus:text-black duration-300 px-3 bg-red">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="pl-2 font-bold">{cartNumber}</span>
        </button>
    </div>
  )
}

export default TopHeader