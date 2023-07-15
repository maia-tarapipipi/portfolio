import { Link } from 'react-router-dom'
import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'

function ProjectsNav() {
  // only display sub menu when clicked

  return (
    <div>
      <nav>
        <div>
          Software Development
          <SoftwareDevelopmentNav />
        </div>
        <div>
          Art and Design
          <ArtAndDesignNav />
        </div>
      </nav>
    </div>
  )
}
export default ProjectsNav
