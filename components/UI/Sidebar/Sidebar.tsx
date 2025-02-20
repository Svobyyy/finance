"use client";
import LogoLarge from "@/components/Icons/LogoLarge";
import Link from "next/link";
import SidebarOptions from "./SidebarOptions";
import LogoSmall from "@/components/Icons/LogoSmall";
// import LogoSmall from "@/components/Icons/LogoSmall";

function Sidebar({ active }: { active: string }) {
  return (
    <header className="lg:max-w-[300px] max-w-[88px] w-full h-screen text_preset_3">
      <nav className="fixed top-0 lg:max-w-[300px] max-w-[88px] w-full bg-grey-900 text-grey-300 h-screen rounded-r-2xl">
        <Link
          href="/overview"
          className="py-10 lg:px-8 flex lg:justify-start justify-center items-center w-full rounded-r-2xl"
        >
          <LogoSmall />
          <LogoLarge />
        </Link>
        <SidebarOptions active={active} />
      </nav>
    </header>
  );
}

export default Sidebar;
