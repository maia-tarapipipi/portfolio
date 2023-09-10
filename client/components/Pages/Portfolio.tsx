import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaFigma } from 'react-icons/fa'

function Portfolio() {
  return (
    <div>
      <h1 className="text-2xl text-center">This Portfolio!</h1>

      <div className="text-lg flex justify-evenly items-center max-sm:flex-col flex-row">
        <Link to="https://github.com/maia-tarapipipi/portfolio" target="_blank">
          <BsGithub size={80} className="mx-auto" />
          Visit the Repo!
        </Link>
        <Link
          to="https://www.figma.com/file/iskxOGw3ShtaVyI8dIQZ68/Maia-Tarapipipi---Portfolio?type=design&node-id=0-1&mode=design&t=oA62W5AMhUJxG4tI-0"
          target="_blank"
        >
          <FaFigma size={80} className="mx-auto" />
          Visit the wireframe!
        </Link>
      </div>
      <div>
        <div className="w-full text-center">
          <p>
            This website you are currently viewing is a project that I have
            personally built! Welcome to my portfolio, which I plan to
            continuously improve as I advance my learning and development
            skills. As I embark on my journey of growth, you can expect to see
            additional features and projects that I will showcase through my
            wireframe. This portfolio serves as a valuable platform for refining
            my front-end development skills while offering me the opportunity to
            explore and learn new technologies. Through this process, I aim to
            create a visually appealing and interactive experience for visitors
            like you. Stay tuned for more exciting updates and projects to come.
            Happy browsing!
          </p>
          <p>Features Implimented:</p>
          <ul className="list-disc pl-10 text-left">
            <li>React</li>
            <li>Active deployment on Vercel</li>
            <li>
              React Packages: React-Slick, React-player, react-scroll and
              react-router-dom
            </li>

            <li>Code Splitting</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="text-center text-lg">Future Plans:</p>
        <ul className="list-disc pl-10">
          <li>Research some ways to improve the software quality</li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
