import { Link } from 'react-router-dom'
import SoftwareDevelopmentNav from './SoftwareDevelopmentNav'
import ArtAndDesignNav from './ArtAndDesignNav'

function ProjectsNav() {
  return (
    <div>
      <nav>
        <SoftwareDevelopmentNav />
        <ArtAndDesignNav />
      </nav>
    </div>
  )
}
export default ProjectsNav
