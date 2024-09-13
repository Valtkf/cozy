import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="border-[1px] border-red-500 w-full h-screen flex items-center sm:items-start">
        <Navbar />
      </main>
    </div>
  );
}
