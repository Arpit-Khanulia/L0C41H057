import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const TopLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default TopLayout