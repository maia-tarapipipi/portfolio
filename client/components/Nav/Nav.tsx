import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'

function Nav() {
  const [open, setOpen] = useState(false)
  const [openSoftware, setOpenSoftware] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  const toggleSubMenu = () => {
    setOpenSoftware((prev) => !prev)
  }
  const toggleMenuNav = () => {
    setOpenNav((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <div className="relative text-2xl">
      <button className="lg:hidden ml-10" onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
      </button>
      <ul className="absolute z-20 bg-white w-screen">
        <div
          className={
            open && width < breakpoint
              ? 'block ml-10'
              : 'hidden w-screen lg:flex justify-evenly bg-white my-5'
          }
        >
          <li className="flex-col">
            <Link to="/" className="hover:text-slate-500">
              home
            </Link>
          </li>
          <div className="relative">
            <button onClick={toggleSubMenu} className="hover:text-slate-500">
              software development
            </button>
            <li className="absolute top-12 z-10 w-screen">
              {openSoftware && <SoftwareDevelopmentNav />}
            </li>
          </div>
          <div className="relative">
            <button onClick={toggleMenuNav} className="hover:text-slate-500">
              art and design
            </button>
            <li className="absolute top-12 z-10 w-screen">
              {openNav && <ArtAndDesignNav />}
            </li>
          </div>
          <Link to="/contact" className="hover:text-slate-500">
            contact
          </Link>
        </div>
      </ul>
    </div>
  )
}
export default Nav
