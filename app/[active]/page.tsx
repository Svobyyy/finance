import Sidebar from "@/components/UI/Sidebar/Sidebar";

export default async function Page({
  params,
  children,
}: {
  params: Promise<{ active: string }>;
  children: React.ReactNode;
}) {
  const active = (await params).active;

  console.log(active)
  return (
    <section className="min-h-[3000px] flex md:flex-row gap-4 flex-col-reverse">
      <Sidebar active={active} />
      <section className="px-10 py-8 mb-8">
        <h1 className="capitalize text_preset_1">{active.replaceAll("_", " ")}</h1>
        {children}
      </section>
    </section>
  );
}
