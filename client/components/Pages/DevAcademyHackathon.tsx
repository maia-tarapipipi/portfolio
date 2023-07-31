import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

function Hackathon() {
  return (
    <div className="px-20 pb-10">
      <h1 className="text-2xl text-center">Dev Academy Hackathon</h1>
      <div className="flex flex-row">
        <div className="w-3/4">
          Kia Ora! This page is currently under construction! Watch this
          space!!!
          <p>
            Welcome! The Dev Academy hackathons were founded this year as a way
            of testing and extending graduates knowledge. The very first one was
            host in July 2023, and there are plans to extend them in the future,
            so watch this space as I add more information and reflections on
            each Hackathon I participate in.
          </p>
          <h2>Openning Hackathon - July 2023</h2>
          <p>
            During July, just after our cohort graduated from Dev Academy we
            were invited to participate in their first ever Hackathon.
            <span>The Goal:</span>
            Recreate 2 pages from an already existing website using the BETH
            stack (see documentation below).
            <ul>
              <li>The home page and the search page</li>
              <li>Search function on home page</li>
              <li>Filtering function in sidepar on search page</li>
            </ul>
          </p>
      




          <div className="pl-10">
            <h1 className="text-center text-lg">Documentation</h1>
            <div className="flex justify-center">
              <ReactPlayer
                playing
                url="https://www.youtube.com/watch?v=cpzowDDJj24&t=2s"
              />
            </div>
            <Link to="https://hypermedia.systems/">Hypermedia Systems</Link>
            <Link to="https://htmx.org/">HTMX Documentation</Link>
            <Link to="https://docs.turso.tech/">Turso Documentation</Link>
            <Link to="https://orm.drizzle.team/docs/quick-start">
              Drizzle Documentation
            </Link>
            <Link to="https://bun.sh/docs">Bun Documentation</Link>
            <Link to="https://elysiajs.com/quick-start.html">
              Elysia.js Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathon
