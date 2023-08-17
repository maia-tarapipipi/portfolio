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
    <div className="text-2xl">
      <button className="lg:hidden" onClick={toggleMenu}>
        {open ? <IoClose /> : <IoMenu />}
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
            <Link to="/" className="hover:text-slate-500">
              home
            </Link>
          </div>
          <div>
            <button onClick={toggleSubMenu} className="hover:text-slate-500">
              software development
          {openSoftware && <SoftwareDevelopmentNav />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nav
