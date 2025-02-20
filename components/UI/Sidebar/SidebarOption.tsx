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
    <li>
      <Link
        href={`${titleFormated}`}
        className={` py-4 capitalize flex gap-4 lg:justify-start justify-center items-center lg:pl-8 lg:mr-6 relative min-h-14 ${
          active === titleFormated
            ? "bg-beige-100 rounded-r-lg lg:rounded-r-xl border-l-4 border-green text-grey-900 lg:pl-[27px]"
            : "hover:text-grey-100 transition-colors"
        }`}
      >
        {children}
        <h3 className="lg:inline-block hidden">{title}</h3>
      </Link>
    </li>
  );
}

export default SidebarOption;
