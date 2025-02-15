import Sidebar from "@/components/UI/Sidebar/Sidebar";

export default async function Page({
  params,
  children,
}: {
  params: Promise<{ active: string }>;
  children: React.ReactNode;
}) {
  const active = (await params).active;
  return (
    <section className="min-h-[3000px] flex flex-row gap-4">
      <Sidebar active={active} />
      {children}
    </section>
  );
}
