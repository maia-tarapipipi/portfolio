function Home() {
  return (
    <div className="text-center">
      <div className="lg:flex lg:flex-row justify-evenly items-center">
        <div className="max-lg:hidden w-80">
          <img src="/maia-photo.svg" alt="Maia-selfie" />
        </div>
        <div className="lg:w-1/2 max-md:w-full mx-4">
          <p className="mt-3">
            Ngāti Hauā, Te Arawa, Te Rarawa, Waikato Tainui
          </p>
          <p className="mt-3">
            I am a Māori Full-Stack Software Developer. I embarked on my journey
            as a developer to find new horizons, new challenges and explore new
            ideas.
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
        </div>
      </div>
      <div className="flex flex-row pb-10">
        <div className="flex flex-row max-lg:flex-col">
          <ul className="text-left list-disc">
            <p className="text-left text-lg w-80"> Tech Stack:</p>
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
          <ul>
            <p className="text-lg w-1/2">Core Skills:</p>
            <li className="pb-2">
              Adaptable and Resourceful: As a production assistant in my
              previous industry, I honed my skills in problem-solving and
              adaptability. The creative process often requires thinking outside
              the box and finding innovative solutions to challenges that arise.
              I have become adept at navigating various situations, identifying
              opportunities, and quickly adapting to new circumstances.
            </li>
            <li className="pb-2">
              Continuous Learner: Throughout my career, I have embraced a growth
              mindset, always eager to learn and expand my knowledge. In my
              previous role, I thrived on learning new ideas and techniques on
              the job, and this drive for continuous improvement carried over to
              the Dev Academy bootcamp. Embracing the learning journey, I
              discovered a genuine joy in acquiring new skills and knowledge,
              which fuels my passion for development and fuels my motivation to
              keep evolving as a professional.
            </li>

            <li className="pb-2">
              Empathy and Cultural Understanding: As a Māori woman, I bring a
              rich and diverse background to my work. This unique perspective
              has nurtured my sense of empathy, enabling me to better understand
              and connect with people from various walks of life. Embracing
              different viewpoints and cultural nuances is an integral part of
              who I am, and it enhances my ability to build meaningful
              relationships and collaborate effectively with others.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
