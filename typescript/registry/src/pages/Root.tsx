// React component that displays nested routes e.g. /home, /details, /search
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
