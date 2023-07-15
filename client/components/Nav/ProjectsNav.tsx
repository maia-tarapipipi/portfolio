import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ProjectsNav() {
  // only display sub menu when clicked

  const [open, setOpen] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  const toggleMenuNav = () => {
    setOpenNav((prev) => !prev)
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
        <button onClick={toggleMenu}>
          Software Development
          {open && <SoftwareDevelopmentNav />}
        </button>
        <button onClick={toggleMenuNav}>
          Art and Design
          {openNav && <ArtAndDesignNav />}
        </button>
      </nav>
    </div>
  )
}
export default ProjectsNav
