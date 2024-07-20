import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
      <div>
        <h1 className=" my-[2rem] text-3xl font-bold text-center">WELCOME USER</h1>
      </div>
      <div className="flex justify-center">
        <Link href="/auth" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join Now!</Link>
      </div>
    </header>
    </>
  );
}
