import { BsGithub } from 'react-icons/bs'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

function ToDoApp() {
  return (
    <div>
      <h1 className="text-center text-2xl">To Do App</h1>

      <div className="text-lg flex justify-evenly items-center max-lg:flex-col">
        <ReactPlayer url="https://www.youtube.com/watch?v=7rwU2hMRHOk" />
        <Link to="https://github.com/maia-tarapipipi/to-do-app" target="_blank">
          <BsGithub size={80} className="mx-5 mt-2 hover:fill-slate-500" />
          Visit the Repo!
        </Link>
      </div>
      <div className="flex flex-row">
        <div>
          <p className="text-center">
            Welcome to To Do App! My aim with this project is to provide a
            simple and effective way for you to keep track of all your tasks and
            stay organized!{' '}
          </p>
          <p>Features:</p>
          <ul className="list-disc pl-10">
            <li>
              Create To-Do: Easily create and add to-dos, which are securely
              stored in the database. This feature ensures that your tasks are
              saved and accessible across sessions.
            </li>
            <li>
              Global State Management with Redux: To Do App leverages the power
              of Redux to manage global state efficiently. This enables seamless
              data synchronization and consistent user experiences throughout
              the app.
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-center text-lg">Demo</h1>

      <p>Future Plans:</p>
      <ul className="list-disc pl-10">
        <li>
          Personalized Styling: We are working on allowing users to personalize
          the app&apos;s styling to match their preferences. With custom themes
          and styling options, you can make To Do App truly your own.
        </li>

        <li>
          Delete a To-Do: We understand that task management also involves the
          ability to remove completed or unnecessary to-dos. Soon, you&apos;ll
          be able to easily delete tasks with just a few clicks.
        </li>
        <li>
          Completed To-dos: See a list of your completed to-dos to see how your
          tracking with your task progress in a separate page{' '}
        </li>
      </ul>
    </div>
  )
}
export default ToDoApp
