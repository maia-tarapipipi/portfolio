import { EmailShareButton } from 'react-share'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FaPaperPlane } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BsFileText } from 'react-icons/bs'

function Footer() {
  return (
    <div>
      <div className="w-70 flex items-center justify-center">
        <Link
          to="https://www.linkedin.com/in/maia-tarapipipi-a08ab4282/"
          target="_blank"
        >
          <IoLogoLinkedin size={40} className="mx-5 hover:fill-slate-500" />
        </Link>

        <EmailShareButton url={'tarapipipim'}>
          <FaPaperPlane size={40} className="mx-5 hover:fill-slate-500" />
        </EmailShareButton>

        <Link to="https://github.com/maia-tarapipipi" target="_blank">
          <BsGithub size={40} className="mx-5 hover:fill-slate-500" />
        </Link>
        <Link to="/Documents/Maia_Tarapipipi_CV.pdf" target="_blank">
          <BsFileText size={40} className="mx-5 hover:fill-slate-500" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
