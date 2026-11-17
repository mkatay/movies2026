import React from 'react'
import { NavLink, Outlet } from 'react-router'

export const Header = () => {

const navLinkClass = ({ isActive }) =>` ${isActive ? "text-red-500 font-semibold" : "text-gray-300" }`

  return (
    <div>
        <nav >
            <NavLink to="/" className={navLinkClass }> Kezdőlap </NavLink>
            <NavLink to="/movies"  className={navLinkClass}> Filmek</NavLink>
            <NavLink  to="/tv" className={navLinkClass}> Sorozatok</NavLink>
            <NavLink to="/search" className={navLinkClass}>Keresés</NavLink>
        </nav>

        <main >
          <Outlet />
        </main>

    </div>
  )
}

