import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <>
      {/* TO DO: add components to render here */}
      <div className="font-ubuntu">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
