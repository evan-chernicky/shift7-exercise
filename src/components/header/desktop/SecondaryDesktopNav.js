import React from 'react'

function SecondaryDesktopNav({navChildren}) {
  return (
    <div className=" h-full slide-in-top">
        <nav className="bg-white pt-2 pb-6 px-10 z-10">
            <ul id="secondaryNav">
                {navChildren.map(item => (
                    <li className="py-6 font-bold hover:text-red" >
                        <a tabindex="1" href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="bg-black/70 h-screen w-full relative top-0 -z-10 duration-300"></div>
    </div>
  )
}

export default SecondaryDesktopNav