import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div className="px-20 pb-10">
      <h1 className="text-2xl text-center">Pinky Promise</h1>
      <div className="flex flex-row">
        <div className="w-3/4">
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
          <ul className="list-disc pl-10">
            <li>React</li>
            <li>Active deployment on Vercel</li>
            <li>React Slick</li>
            <li>React Player</li>
            <li>React Scroll</li>
            <li>React router dom</li>
          </ul>
          <Link
            to="https://www.figma.com/file/iskxOGw3ShtaVyI8dIQZ68/Maia-Tarapipipi---Portfolio?type=design&node-id=0-1&mode=design&t=oA62W5AMhUJxG4tI-0"
            target="_blank"
            className="text-center text-xl hover:text-slate-500"
          >
            Click here to see the wireframe design
          </Link>
        </div>
        <div className="text-lg flex justify-center hover:text-slate-500 w-1/4 items-center">
          <Link
            to="https://github.com/maia-tarapipipi/portfolio"
            target="_blank"
          >
            <BsGithub size={80} className="mx-5 hover:fill-slate-500" />
            Visit the Repo!
          </Link>
        </div>
      </div>
      {/* <h1 className="text-center text-lg">Demo</h1>
      <div className="flex justify-center">
        <ReactPlayer playing url="https://youtu.be/vZRTen1HOsE" />
      </div> */}
      <div className="pl-10">
        <p className="text-center text-lg">Future Plans:</p>
        <ul className="list-disc pl-10">
          <li>Import images from hosting site to improve performance</li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
