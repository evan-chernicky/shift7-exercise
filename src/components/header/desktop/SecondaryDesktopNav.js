import React from 'react'

function SecondaryDesktopNav({navChildren}) {
  return (
    <div id="secondaryNav">
        <div className="bg-black/70 h-screen w-full absolute top-0 -z-10 duration-300"></div>
        <nav className="bg-white slide-in-top pt-2 pb-6 px-10">
            <ul>
                {navChildren.map(item => (
                    <li className="py-6 font-bold">
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default SecondaryDesktopNav