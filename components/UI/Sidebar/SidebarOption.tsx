import Link from "next/link";
import React from "react";

function SidebarOption({
  title,
  children,
  active,
}: {
  title: string;
  children?: React.ReactNode;
  active: string;
}) {
  const titleFormated = title.toLowerCase().replaceAll(" ", "_");

  return (
    <li
      className={`flex-1 relative before:left-0 before:h-[4px] before:right-0 before:bottom-0  before:bg-green before:absolute
                  md:before:top-0 md:before:w-[4px] md:before:right-auto md:before:bottom-0 md:before:h-auto
        ${active === titleFormated ? "" : "before:hidden"}`}
    >
      <Link
        href={`${titleFormated}`}
        className={`h-[66px] md:h-auto capitalize flex flex-col md:flex-row gap-1 md:gap-4 lg:justify-start justify-center items-center lg:pl-8 lg:mr-6 min-h-14 md:rounded-r-lg rounded-t-lg md:rounded-t-none lg:rounded-r-xl ${
          active === titleFormated
            ? "bg-beige-100  text-grey-900"
            : "hover:text-grey-100 transition-colors"
        }`}
      >
        {children}
        <h3 className="lg:inline-block md:hidden hidden tab:inline-block md:text-preset-3 text-preset-5-bold">
          {title}
        </h3>
      </Link>
    </li>
  );
}

export default SidebarOption;
