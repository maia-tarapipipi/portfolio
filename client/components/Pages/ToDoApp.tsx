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
        <ul className="list-disc pl-10">
          <li>Create a to-do which is stored on the database</li>
          <li>Store global state with Redux</li>
        </ul>
      </p>

      <p>
        In the future I plan:
        <ul className="list-disc pl-10">
          <li>to personalize the styling</li>
          <li>have it fully deployed</li>
          <li>Delete a to-do</li>
        </ul>
      </p>
    </div>
  )
}
export default ToDoApp
