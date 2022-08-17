import React from 'react'
import TopHeader from './desktop/TopHeader'
import DesktopNav from './desktop/DesktopNav'
import MobileNav from './mobile/MobileNav'

function header() {
  return (
    <header className="App-header p-5">
        <div className="container md:block hidden">
            <TopHeader />
            <DesktopNav />
        </div>
        <div className="container block md:hidden">
            <MobileNav />
        </div>
    </header>
  )
}

export default header