import React from 'react'
import { NavLink, Outlet } from 'react-router'

export const Header = () => {

const navLinkClass = ({ isActive }) =>
  `transition-colors hover:text-red-400 ${isActive ? "text-red-500 font-semibold" : "text-gray-300" }`//transition-colors: színátmenetes animációt tesz a színváltozásokra.

  return (
    <div>

        <header className="bg-gray-950 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-2xl font-bold">Movie<span className="text-red-500">Zone</span></div>
            <div className="flex items-center gap-8">
            <NavLink to="/" className={navLinkClass }> Kezdőlap </NavLink>
            <NavLink to="/movies"  className={navLinkClass}> Filmek</NavLink>
            <NavLink  to="/tv" className={navLinkClass}> Sorozatok</NavLink>
            <NavLink to="/search" className={navLinkClass}>Keresés</NavLink>
            </div>
        </nav>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
        </main>

    </div>
  )
}

