import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

function PinkyPromise() {
  return (
    <div className="px-20 pb-10">
      <h1 className="text-2xl text-center">Pinky Promise</h1>
      <div className="flex flex-row">
        <div className="w-3/4">
          <p>
            Welcome to Pinky Promise! We are a team of 5 talented and
            enthusiastic graduates from Dev Academy, driven by the desire to
            help people make and keep promises to one another. After an intense
            15-week boot camp, we dedicated our final 10 days to bring our
            learning to life with this app. Our goal is to create a platform
            that enables users to foster trust and accountability through
            meaningful promises.
          </p>
          <p>Features Implimented:</p>
          <ul className="list-disc pl-10">
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
            <li>add a friend,</li>
            <li>
              Add a Friend: Enabling users to add friends to their network is a
              great way to foster connections and make the app more social. It
              can help users build a community of trusted individuals with whom
              they can share promises.
            </li>
            <li>
              Make and View Promises: The core feature of Pinky Promise is
              making promises between friends. Including fields for a
              promise&apos;s name, description, and date is crucial for clarity
              and accountability. Being able to view and keep track of all
              promises adds to the app&apos;s value.
            </li>
            <li>
              Keep or Break a Promise: Giving users the option to mark a promise
              as either kept or broken is an essential aspect of the app&apos;s
              functionality. This allows users to be accountable for their
              commitments and fosters a sense of responsibility.
            </li>
          </ul>
          <Link
            to="https://www.figma.com/file/sNIyAtAcP5v3chOp3jlO7s/Pinky-Promise-Wireframe?type=design&node-id=0-1&mode=design&t=4FJuInfmjO8pfihB-0"
            target="_blank"
            className="text-center text-xl hover:text-slate-500"
          >
            Click here to see the wireframe design
          </Link>
        </div>
        <div className="text-lg flex justify-center hover:text-slate-500 w-1/4 items-center">
          <Link
            to="https://github.com/maia-tarapipipi/pinky-promise"
            target="_blank"
          >
            <BsGithub size={80} className="mx-5 hover:fill-slate-500" />
            Visit the Repo!
          </Link>
        </div>
      </div>
      <h1 className="text-center text-lg">Demo</h1>
      {/* <div className="flex justify-center">
        <ReactPlayer playing url="https://youtu.be/vZRTen1HOsE" />
      </div> */}
      <div className="pl-10">
        <p className="text-center text-lg">Future Plans:</p>
        <p>
          But we don&apos;t stop there. Our dedication to continuous improvement
          means that we have further plans to enchace the user experience. We
          are exploring features such as adding music for the animation to add a
          touch of fun and excitement, working on allowing users to view their
          friends profiles so you can get to know your promise partners better
          and strengthen connection. Being able to to view past promises, so you
          can celebrate the commitments you&apos;ve kept or learn from those
          that were broken, Privacy is essential to us, and we believe that some
          promises are meant to be shared with the world, while others are more
          personal. That&apos;s why we are working on a public or hidden
          promises option, allowing you to choose who can see specific
          commitments.
        </p>
      </div>
    </div>
  )
}

export default PinkyPromise
