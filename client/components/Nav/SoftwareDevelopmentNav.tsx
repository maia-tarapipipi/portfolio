import { Link } from 'react-router-dom'

function SoftwareDevelopmentNav() {
  return (
    <div className="w-full bg-yellow-300">
      <Link className="mx-10 " to="/PinkyPromise">
        pinky promise
      </Link>
      <Link className="mx-10" to="/DiceRoll">
        dice roll
      </Link>
    </div>
  )
}
export default SoftwareDevelopmentNav
