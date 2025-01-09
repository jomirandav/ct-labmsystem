import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="hover:brightness-110"
          src="/images/logo.png"
          alt="Pokemon TCG logo"
          width={500}
          height={500}
        />

        <div className="w-full flex justify-center">
          <a
            className="rounded-full bg-sky-700 bg-opacity-30 border border-solid border-black font-bold transition-colors w-44 flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="http://localhost:3000/sets"
            target=""
          > 
            List card sets
          </a>
        </div>
      </main>
    </div>
  );
}