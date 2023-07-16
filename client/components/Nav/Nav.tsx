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
    <div className="text-2xl">
      <button className="lg:hidden" onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
      </button>
      <div className={open ? 'block' : 'hidden w-full lg:flex justify-evenly'}>
        <div className="flex-col">
          <Link to="/">home</Link>
        </div>
        <button onClick={toggleSubMenu}>software development</button>
        <div className="lg:fixed top-48 z-10">
          {openSoftware && <SoftwareDevelopmentNav />}
        </div>

        <button onClick={toggleMenuNav}>art and design</button>
        <div className="lg:fixed top-48 z-10">
          {openNav && <ArtAndDesignNav />}
        </div>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  )
}
export default Nav
