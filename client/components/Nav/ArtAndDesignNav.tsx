import { Link } from 'react-router-dom'

function ArtAndDesignNav() {
  return (
    <div className="bg-white">
      <Link className="mx-10  hover:text-slate-500" to="/no-hea-koe">
        Nō hea koe?
      </Link>

      <Link className="mx-10  hover:text-slate-500" to="/kainga">
        Kāinga
      </Link>
    </div>
  )
}
export default ArtAndDesignNav
