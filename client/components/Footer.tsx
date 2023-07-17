import { LinkedinShareButton } from 'react-share'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FaPaperPlane } from 'react-icons/fa'

function Footer() {
  return (
    <div className="w-70 flex items-center justify-evenly">
      <LinkedinShareButton
        url={'https://www.linkedin.com/in/maia-tarapipipi-a08ab4282/'}
      >
        <IoLogoLinkedin size={40} />
      </LinkedinShareButton>
      <FaPaperPlane size={40} />
    </div>
  )
}

export default Footer
