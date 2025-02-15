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
  return (
    <li
      className={`${
        active !== title.toLowerCase().replaceAll(" ", "_")
          ? "hover:text-grey-100"
          : ""
      } transition-colors`}
    >
      <Link
        href={`${title.toLowerCase().replaceAll(" ", "_")}`}
        className={`py-4 capitalize flex gap-4 justify-start items-center pl-8 mr-6 ${
          active === title.toLowerCase().replaceAll(" ", "_")
            ? "bg-beige-100 rounded-r-xl border-l-4 border-green text-grey-900 pl-[27px]"
            : ""
        }`}
      >
        {children}
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

export default SidebarOption;
