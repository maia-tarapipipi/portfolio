import PinkyPromise from './PinkyPromise'
import ToDoApp from './ToDoApp'

function Home() {
  return (
    <div>
      <div className="flex flex-row max-md:flex-col  justify-evenly items-center">
        <div className="w-1/4">
          <img src="/maia-photo.svg" alt="Maia-selfie" />
        </div>
        <div className="w-1/2 text-center mx-4">
          <p className="mt-3">
            Ngāti Hauā, Te Arawa, Te Rarawa, Waikato Tainui
          </p>
          <p className="mt-3">
            I am a Māori Software Developer and textile designer. I embarked on
            my journey as a developer to find new horizons, new challenges and
            explore new ideas.
          </p>
          <p className="mt-3">
            Transitioning into the tech sector has been deeply fulfilling so far
            and I&apos;m looking forward to seeing where the next steps will
            take me.
          </p>
          <p className="mt-3">
            I enjoy mixing photography, knit programming, drawing and screen
            printing to create multi-layered artwork. I aim to connect to ideas
            around personal identity, whakapapa and my personal journey of Māori
            in modern spaces.
          </p>
          <p className="text-left text-lg">
            Tech Stack:
            <ul className="text-left list-disc pl-10 ">
              <li>HTML5</li>
              <li>CSS and Tailwind</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Knex.js</li>
              <li>Typescript</li>
              <li>Supertest</li>
              <li>SQLite</li>
              <li>React</li>
              <li>React Query / tanstack</li>
              <li>Framer-motion</li>
              <li>Handlebars</li>
              <li>Jest</li>
              <li>Vitest</li>
            </ul>
          </p>
        </div>
      </div>
      <h1 className="text-2xl text-center">Projects</h1>
      <PinkyPromise />
      <ToDoApp />
    </div>
  )
}
export default Home
