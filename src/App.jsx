import Home from "./pages/Home"
import { createBrowserRouter } from "react-router-dom"
import { createRoutesFromElements } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { Route } from "react-router-dom"
import TopLayout from "./layouts/TopLayout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TopLayout/>} >
      <Route path="/" element={<Home/>} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App