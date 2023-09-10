import { Link } from 'react-router-dom'

function SoftwareDevelopmentNav() {
  return (
    <div className="bg-white  max-lg:flex max-lg:flex-col">
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
      <Link className="mx-10 hover:text-slate-500" to="/korero">
        Kōrero
      </Link>
    </div>
  )
}
export default SoftwareDevelopmentNav
