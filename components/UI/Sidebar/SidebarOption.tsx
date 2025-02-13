import Link from "next/link";
import React from "react";

function SidebarOption({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="hover:text-grey-100 transition-colors">
      <Link
        href={`${title.toLowerCase().replaceAll(" ", "_")}`}
        className="py-4 capitalize flex gap-4 justify-start items-center px-8"
      >
        {children}
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

export default SidebarOption;
