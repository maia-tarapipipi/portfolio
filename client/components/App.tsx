import { Outlet } from 'react-router-dom'
import SubMenu from './SubMenu'
import Header from './Header'
import Nav from './Nav/Nav'

function App() {
  return (
    <>
      {/* TO DO: add components to render here */}
      <div className="font-ubuntu max-sm:px-7 px-20 pb-10">
        <Header />
        <Nav />
        <SubMenu />
        <Outlet />
      </div>
    </>
  )
}

export default App
