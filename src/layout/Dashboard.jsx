
import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/sidebar/SideBar";
import Navigation from "../components/shared/Navigation";

export default function Dashboard({ children }) {
  return (

    <>
      <Navigation></Navigation>
      <div
        className={` relative h-full font-sans antialiased`}>

        <main className='relative flex min-h-screen '>
          {/* TODO Navbar here */}
          <SideBar></SideBar>
          {/* <div className="flex justify-center mx-auto px-20"> <p >WELCOME</p></div> */}
          <div className='flex-grow flex-1 pl-[50px]  px-0  md:pl-[270px] md:px-20 py-10'> <Outlet></Outlet></div>
          {/* TODO Footer here */}

        </main>

      </div></>

  )
}