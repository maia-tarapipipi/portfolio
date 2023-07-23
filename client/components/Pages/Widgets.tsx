import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Widgets() {
  return (
    <div className="px-20 pb-10">
      <h1 className="text-2xl ">Widgets App</h1>
      <Link to="https://github.com/maia-tarapipipi/widgets-app" target="_blank">
        <BsGithub size={40} className="mx-5 hover:fill-slate-500" />
      </Link>
      <p>
        Welcome to Widgets App!
        <img src="/Widgets-app-screenshot.png" alt="Widgets" />
        The aim was to create a basic app to practice using:
        <ul className="list-disc pl-10">
          <li>Prop drilling functions</li>
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

export default Widgets
