import { Outlet } from "react-router"
import CommonLayout from "./components/layout/commonLayout"
import Navbar from "./components/layout/Navbar"


function App() {
 

  return (
    <CommonLayout>
      <Navbar />
      <Outlet />
    </CommonLayout>
  )
}

export default App
