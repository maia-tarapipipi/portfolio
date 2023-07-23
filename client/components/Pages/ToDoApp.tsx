import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ToDoApp() {
  return (
    <div className="px-20">
      <h1 className="text-2xl ">To Do App</h1>
      <Link to="https://github.com/maia-tarapipipi/to-do-app" target="_blank">
        <BsGithub size={40} className="mx-5 hover:fill-slate-500" />
      </Link>
      <p>
        Welcome to To Do App! The aim for this project was to create a simple
        to-do app which users can:
        <ul className="list-disc">
          <li>Create a to-do which is stored on the database</li>
          <li>Store global state with Redux</li>
          <li>Delete a to-do</li>
        </ul>
      </p>
      <div>
        <p>
          below is a comprehensive wireframe which we created during our
          planning stage
        </p>
        {/* <img src="/pinkyPromiseWireframe.png" alt="pinky promise wireframe" /> */}
      </div>
    </div>
  )
}
export default ToDoApp
