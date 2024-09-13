export default function Home() {
  return (
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="border-[1px] border-red-500 w-full h-screen flex items-center sm:items-start">
        <div className="flex justify-between items-center border-[1px] border-blue-500 w-full h-20 pr-10 pl-10">
          <div className="text-2xl font-semibold">
            <h1>Cozy®</h1>
          </div>
          <li className="flex justify-center gap-x-4 text-black font-bold text-sm">
            <a href="#" className="hover:underline">
              SHOP
            </a>
            <a href="#" className="hover:underline">
              COLLECTIVE
            </a>
            <a href="#" className="hover:underline">
              DESIGNERS
            </a>
            <a href="#" className="hover:underline">
              ABOUT US
            </a>
            <a href="#" className="hover:underline">
              CONTACT
            </a>
          </li>
          <div>
            <h1>logo</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
