import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import HomePage from './pages/HomePage'
import SearchPage from './pages/search/SearchPage'
import { searchLoader } from './pages/search/searchLoader'
import DetailsPage from './pages/DetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        // index: true -> default route
        index: true,
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />,
        //^ Fetching data with React Router
        // loader function that recieves information through the route and returns some data
        loader: searchLoader
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
