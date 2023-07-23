import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PinkyPromise() {
  return (
    <div className="px-20 pb-10">
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
        <ul className="list-disc pl-10">
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
      <div className="text-lg text-center hover:text-slate-500">
        <Link to="public/pinkyPromiseWireframe.png" target="_blank">
          Click here to see the wireframe design
        </Link>
        {/* <img src="" alt="pinky promise wireframe" /> */}
      </div>
      <div className="pl-10">
        <p className="text-lg">Skills</p>
        <ul className="list-disc">
          <li>Learning new tech - framer-motion</li>
          <li>Storing global state with react-query</li>
          <li>Auth0 for user authentication</li>
          <li>Zod security</li>
          <li>React for front end</li>
          <li>Knex for back end</li>
        </ul>
      </div>
    </div>
  )
}

export default PinkyPromise
