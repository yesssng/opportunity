import Header from "./components/Header"
import LeftMenu from "./components/LeftMenu"
import { Outlet } from "react-router-dom"

const MainLayout: React.FC = () => {
    return (
      <div className="pt-16">
        <Header/>
        <LeftMenu/>
        <Outlet/>
      </div>
    )
}
  
export default MainLayout