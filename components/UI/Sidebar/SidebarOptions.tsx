import OverviewIcon from "@/components/Icons/Navbar/OverviewIcon";
import SidebarOption from "./SidebarOption";
import TransactionIcon from "@/components/Icons/Navbar/TransactionIcon";
import BudgetIcon from "@/components/Icons/Navbar/BudgetIcon";
import PotIcon from "@/components/Icons/Navbar/PotIcon";
import RecurringBillIcon from "@/components/Icons/Navbar/RecurringBillIcon";

function SidebarOptions({ active }: { active: string }) {
  console.log(active);
  return (
    <ul className="flex gap-1 md:flex-col flex-row justify-center items-center md:items-stretch px-4 mob:px-10 md:px-0 pt-2 md:pt-0">
      <SidebarOption title="Overview" active={active}>
        <OverviewIcon title="Overview" active={active} />
      </SidebarOption>
      <SidebarOption title="Transactions" active={active}>
        <TransactionIcon title="Transactions" active={active} />
      </SidebarOption>
      <SidebarOption title="Budgets" active={active}>
        <BudgetIcon title="Budgets" active={active} />
      </SidebarOption>
      <SidebarOption title="Pots" active={active}>
        <PotIcon title="Pots" active={active} />
      </SidebarOption>
      <SidebarOption title="Recurring Bills" active={active}>
        <RecurringBillIcon title="Recurring Bills" active={active} />
      </SidebarOption>
    </ul>
  );
}

export default SidebarOptions;
