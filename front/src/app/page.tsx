
import Link from "next/link";

export default function Home() {
  return (
   <>
   <section className="w-[100%] h-screen flex items-center justify-center">
    <Link href="/demo">
      <button className="text-white hover:drop-shadow-xl py-4 px-12 rounded-xl bg-gradient-to-br transition-all ease-in-out duration-200 from-green-600 to-green-900 hover:bg-gradient-to-bl hover:from-green-600 hover:to-green-900">
        Click to View
      </button>
    </Link>
   </section>
   </>
  );
}
