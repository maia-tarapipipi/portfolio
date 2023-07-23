import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PinkyPromise() {
  return (
    <div className="px-20">
      <h1 className="text-2xl ">Pinky Promise</h1>
      <Link
        to="https://github.com/maia-tarapipipi/pinky-promise"
        target="_blank"
      >
        <BsGithub size={40} className="mx-5 hover:fill-slate-500" />
      </Link>
      <p>
        Welcome to Pinky Promise! The brain child of 5 talented and enthusiastic
        Dev Academy graduates which aim to help people make and keep promises
        between each other. Worked on in a 10 day period as a final group
        project our aim was to create an app which a user can:
        <ul className="list-disc text-center">
          <li>log into using Auth-0 securely,</li>
          <li>profile with your name, username, and bio,</li>
          <li>add a friend,</li>
          <li>
            to make a promise with this friend which both users can see which
            has a name, description and date
          </li>
          <li>
            to then either choose to keep this promise or to break this promise
          </li>
        </ul>
      </p>
      <div>
        <p>
          below is a comprehensive wireframe which we created during our
          planning stage
        </p>
        <img src="/pinkyPromiseWireframe.png" alt="pinky promise wireframe" />
      </div>
    </div>
  )
}

export default PinkyPromise
