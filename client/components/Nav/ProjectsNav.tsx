import { Link } from 'react-scroll'

function ProjectsNav() {
  return (
    <div className="text-center text-2xl space-x-4">
      <Link to="top" smooth={true} duration={500}>
        About
      </Link>
      <Link to=""> Pinky Promise</Link>
      <Link to=""> Widgets</Link>
      <Link to=""> To-do app</Link>
    </div>
  )
}

export default ProjectsNav
