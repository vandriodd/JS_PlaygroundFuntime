import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import HomePage from './pages/home/HomePage'
import { homeLoader } from './pages/home/homeLoader'
import SearchPage from './pages/search/SearchPage'
import { searchLoader } from './pages/search/searchLoader'
import DetailsPage from './pages/details/DetailsPage'
import { detailsLoader } from './pages/details/detailsLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        // index: true -> default route
        index: true,
        element: <HomePage />,
        loader: homeLoader
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
        element: <DetailsPage />,
        loader: detailsLoader
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
