import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import ProjectsNav from './ProjectsNav'

function Nav() {
  // project has 2 drop down menus
  // menu is responsive to screen width - uses hamburger menu
  // event listener to tell when its been clicked
  // import in react icons for hamburger and cross

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <nav
        className={
          open
            ? 'block'
            : 'hidden ' +
              'w-70 lg:flex justify-between items-center lg:items-center lg:w-auto'
        }
      >
        <Link to="/">home</Link>
        <ProjectsNav />
        <Link to="/contact">contact</Link>
      </nav>
      <button className="lg:hidden" onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
      </button>
    </div>
  )
}
export default Nav
