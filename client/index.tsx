import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'

export const routes = createRoutesFromElements(
  // TO DO: Error Component
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    {/* ready components for other tickets */}
    {/* <Route index element={<Home />} /> */}
    {/* <Route index element={<NoHeaKoe  />} /> */}
    {/* <Route index element={<kainga  />} /> */}
    {/* <Route index element={<pinkypromise  />} /> */}
    {/* <Route index element={<contact  />} /> */}
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
