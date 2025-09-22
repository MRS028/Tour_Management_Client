import { Outlet } from "react-router"
import CommonLayout from "./components/layout/commonLayout"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"


function App() {
 

  return (
    <CommonLayout>
      <Navbar />
     <div className="min-h-screen">
       <Outlet />
     </div>
     <Footer />
    </CommonLayout>
  )
}

export default App
