import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'
import { useState } from 'react'

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
      <button onClick={toggleMenu}>
        Software Development
        {open && <SoftwareDevelopmentNav />}
      </button>
      <button onClick={toggleMenuNav}>
        Art and Design
        {openNav && <ArtAndDesignNav />}
      </button>
    </div>
  )
}
export default ProjectsNav
