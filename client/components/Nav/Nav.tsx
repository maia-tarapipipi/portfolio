import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'

function Nav() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const [openSoftware, setOpenSoftware] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const toggleSubMenu = () => {
    setOpenSoftware((prev) => !prev)
  }
  const toggleMenuNav = () => {
    setOpenNav((prev) => !prev)
  }

  return (
    <div className="text-4xl">
      <button className="lg:hidden" onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
      </button>
      <nav
        className={
          open
            ? 'block'
            : 'hidden ' +
              'w-100 lg:flex justify-evenly lg:items-center lg:w-auto'
        }
      >
        <Link to="/">home</Link>
        <button onClick={toggleSubMenu}>
          software development
          {openSoftware && <SoftwareDevelopmentNav />}
        </button>
        <button onClick={toggleMenuNav}>
          art and design
          {openNav && <ArtAndDesignNav />}
        </button>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  )
}
export default Nav
