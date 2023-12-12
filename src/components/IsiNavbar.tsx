import React from "react";

export default function MenuOverlay(){
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
    };
    return (
       <ul className="flex flex-col py-4 items-center">
           
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
    )
}