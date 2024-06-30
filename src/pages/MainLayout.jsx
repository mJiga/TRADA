import Sidebar from "@/components/Sidebar/Sidebar"
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout bg-black min-h-screen font-Poppins text-white flex">

      <div className="fixed top-0 left-0 h-full flex flex-col z-30">
        <header className="hover:text-zinc-400 transition duration-300 ease-in-out p-8 ml-20">
          <Link to="/" className="text-2xl font-bold">TRADA</Link>
        </header>
        <Sidebar className='z-20'/>
      </div>
      
      <div className="flex flex-grow items-center justify-center">
        {children}
      </div>

    </div>
  );
};

export default MainLayout
