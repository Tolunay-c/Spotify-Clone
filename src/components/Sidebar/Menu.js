import { Icon } from 'icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='bg-[#121212] my-2 p-3 rounded-md w-[95%] mx-auto'>
        <ul className='flex flex-col'>
  
            <li>
                <NavLink to={"/collection"} activeClassName='bg-active text-white' className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded '>
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Kitaplığın
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu