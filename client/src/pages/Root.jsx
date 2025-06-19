import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar.jsx"

const Root = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
    </div>
  )
}

export default Root