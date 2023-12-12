"use client";
import React, {useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from "./IsiNavbar";
import Image from "next/image";

export default function Navbar (){
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
    };

    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
       <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8  ">
            <Image src="/images/logo4.png" alt="Logo" className="rounded-full" width={150} height={150} />
                <div className="mobile-menu block md:hidden ">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)}className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"><Bars3Icon className="h-5 w-5 "></Bars3Icon></button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"><XMarkIcon className="h-5 w-5 "></XMarkIcon></button>
                        )    
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex space-x-4">
                    <li>
                    <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl  md:p-0 hover:text-white hover:border-b border-rose-300 " onClick={() => handleScrollTo('hero')}>About</a>
                    </li>
                    <li>
                    <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl  md:p-0 hover:text-white hover:border-b border-rose-300 " onClick={() => handleScrollTo('project')}>Project</a>
                    </li>
                    <li>
                    <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl  md:p-0 hover:text-white hover:border-b border-rose-300 " onClick={() => handleScrollTo('contact')}>Contact</a>
                    </li>
                </ul>

                </div>
            
            </div>
            {navbarOpen ? <MenuOverlay></MenuOverlay> : null}
       </nav>
    );
};




