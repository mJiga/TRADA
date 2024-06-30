import { CircleAccount } from "@/assets/icons/CircleAccount";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { SimulatorIcon } from "@/assets/icons/SimulatorIcon";
import { TradeIcon } from "@/assets/icons/TradeIcon";
import { useAuthContext } from "@/contexts/AuthContext";
import { SidebarItem } from './SidebarItem';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const { currentUser } = useAuthContext();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('/home');

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="font-Poppins">
      <SidebarItem
        to='/profile'
        Icon={CircleAccount}
        label={currentUser.email || 'Guest'}
        currentPage = {currentPage}
        isProfile={true}
        iconSize="w-30 h-30"
        padding="p-20"
      />
      <SidebarItem
        to='/home'
        Icon={HomeIcon}
        label='Home'        
        currentPage = {currentPage}
        iconSize="w-8 h-8"
        padding="p-6"
      />
      <SidebarItem
        to='/simulator'
        Icon={SimulatorIcon}
        label='Simulator'
        currentPage = {currentPage}
        isSimulator={true}
        iconSize="w-8 h-8"
        padding="p-6"
      />
      <SidebarItem
        to='/trade'
        Icon={TradeIcon}
        label='Trade'
        currentPage = {currentPage}
        iconSize="w-8 h-8"
        padding="p-6"
      />
    </div>
  );
}

export default Sidebar;
