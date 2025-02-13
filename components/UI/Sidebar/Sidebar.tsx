import LogoLarge from "@/components/Icons/LogoLarge";
import SidebarOption from "./SidebarOption";
import OverviewIcon from "@/components/Icons/Navbar/OverviewIcon";
import TransactionIcon from "@/components/Icons/Navbar/TransactionIcon";
import PotIcon from "@/components/Icons/Navbar/PotIcon";
import RecurringBillIcon from "@/components/Icons/Navbar/RecurringBillIcon";
import BudgetIcon from "@/components/Icons/Navbar/BudgetIcon";
import MinimizeIcon from "@/components/Icons/Navbar/MinimizeIcon";
import Link from "next/link";
// import LogoSmall from "@/components/Icons/LogoSmall";

function Sidebar() {
  return (
    <header className="max-w-[300px] w-full h-screen text_preset_3">
      <nav className="fixed top-0 max-w-[300px] w-full bg-grey-900 text-grey-300 flex justify-between flex-col h-screen">
        <section>
          <Link href="/" className="py-10 px-8 inline-block w-full">
            {/* <LogoSmall /> */}
            <LogoLarge />
          </Link>
          <ul className="flex gap-1 flex-col">
            <SidebarOption title="Overview">
              <OverviewIcon />
            </SidebarOption>
            <SidebarOption title="Transactions">
              <TransactionIcon />
            </SidebarOption>
            <SidebarOption title="Budgets">
              <BudgetIcon />
            </SidebarOption>
            <SidebarOption title="Pots">
              <PotIcon />
            </SidebarOption>
            <SidebarOption title="Recurring Bills">
              <RecurringBillIcon />
            </SidebarOption>
          </ul>
        </section>
        <div className="hover:text-grey-100 transition-colors py-4 capitalize flex gap-4 justify-start items-center cursor-pointer  px-8">
          <MinimizeIcon />
          <h3>Minimize</h3>
        </div>
      </nav>
    </header>
  );
}

export default Sidebar;
