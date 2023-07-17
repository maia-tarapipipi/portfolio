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
    <div className="text-2xl">
      <button className="lg:hidden ml-10" onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
      </button>
      <ul>
        <div
          className={
            open && width < breakpoint
              ? 'block ml-10'
              : 'hidden w-full lg:flex justify-evenly bg-white'
          }
        >
          <li className="flex-col">
            <Link to="/">home</Link>
          </li>
          <button onClick={toggleSubMenu}>software development</button>
          <li className="lg:fixed top-48 z-10">
            {openSoftware && <SoftwareDevelopmentNav />}
          </li>

          <button onClick={toggleMenuNav}>art and design</button>
          <li className="lg:fixed top-48 z-10">
            {openNav && <ArtAndDesignNav />}
          </li>
          <Link to="/contact">contact</Link>
        </div>
      </ul>
    </div>
  )
}
export default Nav
