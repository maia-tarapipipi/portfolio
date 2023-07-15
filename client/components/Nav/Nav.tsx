import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'

function Nav() {
  const [open, setOpen] = useState(false)
  const [openSoftware, setOpenSoftware] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
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
              'w-100 lg:flex justify-evenly lg:items-start lg:w-auto lg:flex-row'
        }
      >
        <Link to="/">home</Link>

        <button onClick={toggleSubMenu}>software development</button>
        <div className="fixed top-28 z-10">
          {openSoftware && <SoftwareDevelopmentNav />}
        </div>

        <button onClick={toggleMenuNav}>art and design</button>
        <div className="fixed top-28 z-10">
          {openNav && <ArtAndDesignNav />}
        </div>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  )
}
export default Nav
