import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import ProjectsNav from './ProjectsNav'

function Nav() {
  // have 3 buttons - home, projects and contact
  // project has 2 drop down menus
  // menu is responsive to screen width - uses hamburger menu
  // event listener to tell when its been clicked
  // screen event listener to tell when screen width is below tablet size
  // import in react icons for hamburger and cross

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024
  const [open, setOpen] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
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
              'w-full lg:flex justify-between items-center lg:items-center lg:w-auto'
        }
      >
        <Link to="/">home</Link>
        {/* going to put another component here with another drop down */}
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
