import Link from "next/link";
import Header from "../components/head/header";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="flex justify-center items-center w-full h-[60vh] my-[1rem] bg-slate-300">
          <h1 className="text-3xl font-bold text-center">WELCOME USER</h1>
        </div>
        <div className="bg-emerald-400 flex justify-center items-center h-[40vh]">
          <Link href="/auth" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join Now!
          </Link>
        </div>
        <div className="flex justify-center items-center w-full h-[60vh] my-[1rem] bg-slate-300">
          <h1 className="text-3xl font-bold text-center">OR</h1>
        </div>
      </main>
      <footer className="h-[10vh] bg-neutral-100 flex justify-center items-center">
        <p className="text-center text-slate-500">Copyright © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}
