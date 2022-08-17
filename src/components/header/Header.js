import React, {useState} from 'react'
import TopHeader from './desktop/TopHeader'
import DesktopNav from './desktop/DesktopNav'
import MobileNav from './mobile/MobileNav'

function Header() {

  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", updateDimensions)
  function updateDimensions () {
      setWidth(window.innerWidth)
  }       

  return (
    <header className="App-header absolute top-0 left-0 w-full">
      {width > 768 ? (
            <>
              <TopHeader />
              <DesktopNav />
            </>
        ) : (
            <MobileNav />
        )}
    </header>
  )
}

export default Header