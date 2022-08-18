import React from 'react'
import Logo from '../../../assets/svg/Logo.js'

function MobileNav() {
  return (
    <div className="h-12 flex items-center p-3 justify-between mobile">
      <div className="flex items-center">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <a href="/"><Logo/></a>
      </div>
    </div>
  )
}

export default MobileNav