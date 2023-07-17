import { LinkedinShareButton, LinkedinIcon } from 'react-share'
import { IoLogoLinkedin } from 'react-icons/io5'

function Footer() {
  return (
    <div>
      <LinkedinShareButton
        url={'https://www.linkedin.com/in/maia-tarapipipi-a08ab4282/'}
        className="w-full flex items-center justify-center"
      >
        <IoLogoLinkedin size={40} className="text-center" />
      </LinkedinShareButton>
    </div>
  )
}

export default Footer
