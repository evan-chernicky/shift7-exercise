import React from 'react'

function SecondaryNav({navChildren, secondaryAnimation, setIsSecondaryOn}) {
  return (
    <div className={`absolute top-0 left-0 h-full z-20 bg-gray-100 w-full ${secondaryAnimation}`}>
        <nav>
            <ul className="border-y">
                <li className="bg-white">
                    <button onClick={() => setIsSecondaryOn(false)} className="w-full p-3 border-y flex items-center hover:text-red focust-text-red duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                        <span className="uppercase font-bold">GO BACK</span>
                    </button>
                </li>
                {navChildren ? navChildren.map(item => (
                    <li key={item.name}>
                        <a href="/" className="w-full p-3 border-y flex justify-between items-center hover:text-red focust-text-red duration-300">
                            <span className="uppercase font-bold">{item.name}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </li>
                )) : null}
            </ul>
        </nav>
    </div>
  )
}

export default SecondaryNav