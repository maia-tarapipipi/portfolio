import { Link } from 'react-router-dom'

function SoftwareDevelopmentNav() {
  return (
    <div className="bg-white">
      <Link className="mx-10 hover:text-slate-500" to="/PinkyPromise">
        pinky promise
      </Link>
      <Link className="mx-10 hover:text-slate-500" to="/DiceRoll">
        dice roll
      </Link>
    </div>
  )
}
export default SoftwareDevelopmentNav
