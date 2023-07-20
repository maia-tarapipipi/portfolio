import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import Home from '../client/components/Pages/Home'
import Contact from './components/Pages/Contact'
import PinkyPromise from './components/Pages/PinkyPromise'

export const routes = createRoutesFromElements(
  // TO DO: Error Component errorElement={<ErrorPage />}
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route index path="/contact" element={<Contact />} />
    <Route index path="/pinky-promise" element={<PinkyPromise />} />
    {/* <Route path="add-friends" element={} /> */}
    {/* <Route index  path="/NoHeaKoe" element={<NoHeaKoe />} /> */}
    {/* <Route index path="/kainga" element={<kainga  />} /> */}
  </Route>,
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <AppProvider />
    </QueryClientProvider>,
  )
})
