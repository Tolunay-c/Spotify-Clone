import React from "react";
import logo from "img/logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "icons";
import Playlist from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";
import { NavLink } from 'react-router-dom'


function Sidebar() {

  const sidebar = useSelector(state => state.player.sidebar)

  return (
    <aside className="w-full md:w-1/5  flex  flex-shrink-0 flex-col bg-black">
      <div className="bg-[#121212] my-3 py-3 px-2 rounded-md w-[95%] mx-auto">
      <a href="#" className="mb-7 px-6">
        <img alt="" src={logo} className="h-10" />
      </a>
      <nav className='bg-[#121212] rounded-md w-[95%] mx-auto'>
        <ul className='flex flex-col'>
            <li>
                <NavLink to={"/"} activeClassName=' text-white' exact className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white rounded '>
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>
                <NavLink to={"/search"} activeClassName='bg-active text-white' className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white rounded '>
                    <span>
                        <Icon name="search" />
                    </span>
                    Ara
                </NavLink>
            </li>
 
        </ul>
    </nav>
      </div>

      <Menu className="px-2" />

      <nav className="">
      <div className="bg-[#121212] my-3 py-3 px-2 rounded-md w-full  md:w-[95%] mx-auto">
    
    
        <ul>

          <li>
            <a href="#"  className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon size={12} name='plus'/>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>

          <li>
            <a href="#" className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-70 group-hover:opacity-100">
                <Icon size={12} name='heartFilled'/>
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
        </div>
      </nav>

      <Playlist/>

      <DownloadApp/>

        {sidebar && <SidebarCover />}

    </aside>
  );
}

export default Sidebar;
