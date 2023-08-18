import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'

function Nav() {
  const [open, setOpen] = useState(false)
  const [openSoftware, setOpenSoftware] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  const toggleSubMenu = () => {
    setOpenSoftware((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <div>
      <button className="lg:hidden place-content-end" onClick={toggleMenu}>
        {open ? <IoClose size={40} /> : <IoMenu size={40} />}
      </button>
      <div className="bg-white">
        <div
          className={
            open && width < breakpoint
              ? 'block'
              : 'hidden ' + 'w-full lg:flex justify-center space-x-10 lg:w-auto'
          }
        >
          <div>
            <Link to="/" className="text-lg hover:text-slate-500">
              home
            </Link>
          </div>
          <div>
            <button
              onClick={toggleSubMenu}
              className="text-lg hover:text-slate-500"
            >
              projects
            </button>
          </div>
        </div>
        <div className="flex justify-center md:text-xs">
          {openSoftware && <SoftwareDevelopmentNav />}
        </div>
      </div>
    </div>
  )
}
export default Nav
