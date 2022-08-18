import React, {useState} from 'react'
import TopHeader from './desktop/TopHeader'
import DesktopNav from './desktop/DesktopNav'
import SecondaryDesktopNav from './desktop/SecondaryDesktopNav'
import MobileNav from './mobile/MobileNav'
import PulloutNav from './mobile/PulloutNav'

function Header() {

  const [width, setWidth] = useState(window.innerWidth)
  const [isNavClicked, setIsNavClicked] = useState(false)
  const [navChildren, setNavChildren] = useState(null)
  const [mobileNav, setMobileNav] = useState(null)

  //gets window size on resize
  window.addEventListener("resize", updateDimensions)
  function updateDimensions () {
      setWidth(window.innerWidth)
  }
  
  //displays if secondary nav is on
  function setLowerNav(children) {
    //If clicked on item is the same, close the menu
    if (children === navChildren && isNavClicked === true) {
      setIsNavClicked(false)
    } else {
      setIsNavClicked(true)
    }
    setNavChildren(children)
  }

  return (
    <header className="App-header fixed top-0 left-0 w-full h-full drop-shadow-xl overflow-hidden font-noto-sans font-700">
      {width > 768 ? (
            <>
              <TopHeader />
              <DesktopNav setLowerNav={setLowerNav} isNavClicked={isNavClicked}/>
              {isNavClicked ? <SecondaryDesktopNav navChildren={navChildren}/> : null}
            </>
        ) : (
          <>
            <MobileNav setMobileNav={setMobileNav}/>
            <PulloutNav setMobileNav={setMobileNav} mobileNav={mobileNav}/>
          </>
        )}
    </header>
  )
} 

export default Header