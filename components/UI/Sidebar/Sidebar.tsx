"use client";
import LogoLarge from "@/components/Icons/LogoLarge";
import MinimizeIcon from "@/components/Icons/Navbar/MinimizeIcon";
import Link from "next/link";
import SidebarOptions from "./SidebarOptions";
import { useState } from "react";
// import LogoSmall from "@/components/Icons/LogoSmall";

function Sidebar({ active }: { active: string }) {

  const [minimized, setMinimized] = useState(false);

  return (
    <header className="max-w-[300px] w-full h-screen text_preset_3">
      <nav className="fixed top-0 max-w-[300px] w-full bg-grey-900 text-grey-300 flex justify-between flex-col h-screen rounded-r-2xl">
        <section>
          <Link href="/overview" className="py-10 px-8 inline-block w-full">
            {/* <LogoSmall /> */}
            <LogoLarge />
          </Link>
          <SidebarOptions active={active} />
        </section>
        <button 
        onClick={() => setMinimized((mini) => !mini)}
        className="hover:text-grey-100 transition-colors py-4 capitalize flex gap-4 justify-start items-center cursor-pointer pl-8 mr-6 min-h-14">
          <MinimizeIcon />
          <h3 className={`${minimized ? "hidden" : "inline-block"}`}>Minimize</h3>
        </button>
      </nav>
    </header>
  );
}

export default Sidebar;
