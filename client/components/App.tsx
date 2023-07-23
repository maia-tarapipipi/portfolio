import { Outlet } from 'react-router-dom'
import SubMenu from './SubMenu'
import Header from './Header'

function App() {
  return (
    <>
      {/* TO DO: add components to render here */}
      <div className="font-ubuntu px-20 pb-10">
        <Header />
        <SubMenu />
        <Outlet />
      </div>
    </>
  )
}

export default App
