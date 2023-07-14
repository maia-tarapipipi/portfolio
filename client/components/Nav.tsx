import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  // have 3 buttons - home, projects and contact
  // project has 2 drop down menus
  // menu is responsive to screen width - uses hamburger menu
  // event listener to tell when its been clicked
  // screen event listener to tell when screen width is below tablet size
  // import in react icons for hamburger and cross

  return (
    <div>
      <nav>
      <Link to="/">home</Link>
      <Link to="/">projects</Link>
      <Link to="/">contact</Link>
      </nav>
    </div>
  )
}
export default Nav
