import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
function HomeLayout() {
  return (
    <>
    <Navbar/>
     <main className="align-elements"><Outlet/></main>
    </>
  )
}

export default HomeLayout