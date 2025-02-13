import Button from "@/components/UI/Button";
import Sidebar from "@/components/UI/Sidebar/Sidebar";

export default function Home() {
  return (
    <section className="min-h-[3000px] flex flex-row gap-4">
      <Sidebar />
      <div className="flex gap-4">
        <Button color="primary">
          <h1>Placeholder</h1>
        </Button>
        <Button color="secondary">
          <h1>Placeholder</h1>
        </Button>

        <Button color="tertiary">
          <h1>Placeholder</h1>
        </Button>

        <Button color="destroy">
          <h1>Placeholder</h1>
        </Button>
      </div>
    </section>
  );
}
