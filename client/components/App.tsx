import { Outlet } from 'react-router-dom'
import SubMenu from './SubMenu'
import Header from './Header'

function App() {
  return (
    <>
      {/* TO DO: add components to render here */}
      <div className="font-ubuntu">
        <Header />
        <SubMenu />
        <Outlet />
      </div>
    </>
  )
}

export default App
