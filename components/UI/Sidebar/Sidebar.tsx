"use client";
import LogoLarge from "@/components/Icons/LogoLarge";
import Link from "next/link";
import SidebarOptions from "./SidebarOptions";
import LogoSmall from "@/components/Icons/LogoSmall";
// import LogoSmall from "@/components/Icons/LogoSmall";

function Sidebar({ active }: { active: string }) {
  return (
    <header className="lg:max-w-[300px] md:max-w-[88px] w-full md:h-screen text_preset_3">
      <nav className="fixed md:top-0 bottom-0 md:bottom-auto lg:max-w-[300px] md:max-w-[88px] w-full bg-grey-900 text-grey-300 md:h-screen md:rounded-r-2xl rounded-t-lg md:rounded-t-none">
        <Link
          href="/overview"
          className="hidden md:flex py-10 lg:px-8 lg:justify-start justify-center items-center w-full rounded-r-2xl"
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
