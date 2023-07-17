import { Link } from 'react-router-dom'

function ArtAndDesignNav() {
  return (
    <div className="bg-white">
      <Link className="mx-10  hover:text-slate-500" to="/NoHeaKoe">
        Nō hea koe?
      </Link>

      <Link className="mx-10  hover:text-slate-500" to="/Kainga">
        Kāinga
      </Link>
    </div>
  )
}
export default ArtAndDesignNav
