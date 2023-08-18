import { BsGithub } from 'react-icons/bs'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

function Widgets() {
  return (
    <div>
      <h1 className="text-2xl text-center">Widgets App</h1>
      <h1 className="text-center text-lg">Demo</h1>
      <div className="text-lg flex justify-evenly items-center max-lg:flex-col">
        <div>
          <ReactPlayer
            className="max-md:hidden"
            url="youtube.com/watch?v=YAcs6A4gOUk"
          />
          <iframe
            title="Pinky Promise Demo"
            className="md:hidden border-0"
            width="420"
            height="315"
            src="https://www.youtube.com/embed/YAcs6A4gOUk"
          ></iframe>
        </div>
        <div className="text-lg flex justify-center hover:text-slate-500 w-1/4 items-center">
          <Link
            to="https://github.com/maia-tarapipipi/widgets-app"
            target="_blank"
          >
            <BsGithub size={80} className=" m-5 hover:fill-slate-500" />
            Visit the Repo!
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <p>
            Welcome to Widgets App! My primary objective with this app is to
            provide a practical playground for honing my web development skills.{' '}
          </p>
          <p>Features:</p>
          <ul className="list-disc pl-10">
            <li>
              Prop Drilling Functions: Delve into prop drilling, an important
              concept in React, to pass data down the component tree. This will
              help you understand how to manage and share data between
              components efficiently.
            </li>
            <li>
              CRUD Operations for Widgets: Fundamental to handling data in web
              applications. You can create new widgets, display them on the
              front-end, and delete them when no longer needed.
            </li>
          </ul>
        </div>
      </div>

      <div className="pl-10">
        <p className="text-lg">Future Plans:</p>
        <ul className="list-disc">
          <li>
            Styling Personalization: We are actively working on enabling users
            to personalize the app&apos;s styling. You will soon have the
            ability to customize the visual appearance of Widgets App, allowing
            you to showcase your creativity and design skills.
          </li>
          <li>Redeploy using a new stack for extending learning</li>
        </ul>
      </div>
    </div>
  )
}

export default Widgets
