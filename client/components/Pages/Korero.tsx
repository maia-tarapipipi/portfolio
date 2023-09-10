import { BsGithub } from 'react-icons/bs'
import { FaFigma } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

function Korero() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Kōrero</h1>

      <h1 className="text-center text-lg">Demo</h1>

      <div className="text-lg flex justify-center items-center max-lg:flex-col flex-row">
        {/* TO DO: REPLACE WITH DEMO VIDEOS
        <div>
          <ReactPlayer className="max-md:hidden" url="" />
          <iframe
            title="Kōrero Demo"
            className="md:hidden border-0"
            width="420"
            height="315"
            src=""
          ></iframe>
        </div> */}

        <Link
          to="https://github.com/maia-tarapipipi/korero"
          target="_blank"
          className=" hover:text-slate-500 text-lg m-4"
        >
          <BsGithub size={80} className="mx-5" />
          Visit the Repo!
        </Link>

        <Link
          to="https://www.figma.com/file/qWlffP9CnZ5wAi8yN26HmB/chatroom-%2F-meetup-app?type=design&node-id=0%3A1&mode=design&t=cpH2i23guSLVSEel-1"
          target="_blank"
          className="text-center text-lg hover:text-slate-500"
        >
          <FaFigma size={80} className="mx-auto" />
          Visit the wireframe design
        </Link>
      </div>
      <div className="w-full">
        <div>
          <p>
            I&apos;m currently workng on this at the moment so not all features
            I aim to put in are in the app. Aim: To create a chat app designed
            to help people learning Te Reo Maori to connect with other speakers
            and learners. To foster and build community.
          </p>
          <p>Features Implimented so Far:</p>
          <ul className="list-disc pl-10 text-left">
            <li>
              Secure Authentication with Auth0: Using Auth0 for authentication
              is a good choice as it provides a secure and reliable way for
              users to log into the app. It ensures that user credentials are
              protected and reduces the risk of unauthorized access.
            </li>
            <li>
              User Profile: Allowing users to create and customize their
              profiles with their name, username, and bio is essential for
              personalization and identity within the app. Users can feel more
              connected to the platform by having a unique profile.
            </li>

            <li>
              Add a Friend: Enabling users to add friends to their network is a
              great way to foster connections and make the app more social. It
              can help users build a community of trusted individuals with whom
              they can share promises.
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-10">
        <p className="text-center text-lg">Future Plans:</p>
        <ul>
          <li>Deployment</li>
          <li>WebRTC or similar for video calling</li>
          <li>Code with software quality in mind</li>
        </ul>
      </div>
    </div>
  )
}

export default Korero
