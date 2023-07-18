import Nav from './Nav/Nav'
function Header() {
  return (
    <div>
      <div className="text-center mt-12 bg-white">
        <div className="text-4xl">MAIA TARAPIPIPI</div>
        <div className="text-2xl">
          Full-Stack Software Developer | Textile Artist
        </div>
      </div>
      <div className="mb-20">
        <Nav />
      </div>
    </div>
  )
}

export default Header
