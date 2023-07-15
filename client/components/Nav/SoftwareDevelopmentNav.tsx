import { Link } from 'react-router-dom'

function SoftwareDevelopmentNav() {
  // add event listener so when clicked display menu
  return (
    <div>

      <Link to="/PinkyPromise">pinky promise</Link>
      <Link to="/DiceRoll">dice roll</Link>
    </div>
  )
}
export default SoftwareDevelopmentNav
