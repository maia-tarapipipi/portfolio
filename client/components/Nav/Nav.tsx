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
              : 'hidden w-screen lg:flex justify-evenly'
          }
        >
          <li className="flex-col">
            <Link to="/" className="hover:text-slate-500">
              home
            </Link>
          </li>
          <div>
            <button onClick={toggleSubMenu} className="hover:text-slate-500">
              software development
            </button>
            <li className="w-screen max-lg:fixed lg:absolute lg:top-10 lg:left-1/4 z-10 bg-white ">
              {openSoftware && <SoftwareDevelopmentNav />}
            </li>
          </div>
          {/* <div>
            <button onClick={toggleMenuNav} className="hover:text-slate-500">
              art and design
            </button>
            <li className="max-lg:fixed  lg:absolute  lg:top-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 bg-white">
              {openNav && <ArtAndDesignNav />}
            </li>
          </div>
          <Link to="/contact" className="hover:text-slate-500">
            contact
          </Link>
        </div> */}
        </div>
      </ul>
    </div>
  )
}
export default Nav
