import React from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false)

const navLinkClass = ({ isActive }) =>
  `transition-colors hover:text-red-400 ${isActive ? "text-red-500 font-semibold" : "text-gray-300" }`//transition-colors: színátmenetes animációt tesz a színváltozásokra.

  return (
    <div className='min-h-screen max-w-350 mx-auto bg-gray-800'>
        <header className="bg-gray-950 text-white shadow-lg">
            <nav className="max-w-8xl mx-auto px-6">

              {/* Felső sor */}
              <div className="min-h-16 flex items-center justify-between">

                <div className="text-2xl font-bold">
                  Movie<span className="text-red-500">Zone</span>
                </div>

                {/* Asztali menü */}
                <div className="hidden min-[531px]:flex items-center gap-8">
                  <NavLink to="/" end className={navLinkClass}>Kezdőlap</NavLink>
                  <NavLink to="/movies" className={navLinkClass}>Filmek</NavLink>
                  <NavLink to="/tv" className={navLinkClass}>Sorozatok</NavLink>
                  <NavLink to="/search" className={navLinkClass}>Keresés</NavLink>
                </div>

                {/* Hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="min-[531px]:hidden text-3xl" >
                  {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
                </button>

              </div>

              {/* Mobil menü – külön sor */}
              {menuOpen && (
                <div className="flex flex-col gap-4 py-4 min-[531px]:hidden">
                  <NavLink to="/" end className={navLinkClass} onClick={() => setMenuOpen(false)}>Kezdőlap</NavLink>
                  <NavLink to="/movies" className={navLinkClass} onClick={() => setMenuOpen(false)}>Filmek</NavLink>
                  <NavLink to="/tv" className={navLinkClass} onClick={() => setMenuOpen(false)}>Sorozatok</NavLink>
                  <NavLink to="/search" className={navLinkClass} onClick={() => setMenuOpen(false)}>Keresés</NavLink>
                </div>
              )}

            </nav>
        </header>

        <main className="mx-auto pt-4  ">
          <Outlet />
        </main>

    </div>
  )
}

