import { Link } from 'react-router-dom'

function SoftwareDevelopmentNav() {
  return (
    <div className="bg-white">
      <Link className="mx-10 hover:text-slate-500" to="/pinky-promise">
        pinky promise
      </Link>
      <Link className="mx-10 hover:text-slate-500" to="/to-do-app">
        to-do app
      </Link>
      <Link className="mx-10 hover:text-slate-500" to="/widgets">
        widgets app
      </Link>
      <Link className="mx-10 hover:text-slate-500" to="/portfolio">
        portfolio
      </Link>
    </div>
  )
}
export default SoftwareDevelopmentNav
