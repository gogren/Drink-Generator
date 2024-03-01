import "./styles.css"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center gap-5 pt-8">
        <div className="text-xl text-white">
          Welcom to Grant's:
        </div>
        <div className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Drink Generator
        </div>
        <div className="flex justify-center">
        <Link className="text-3xl text-white bg-gray-700 rounded-md shadow-lg px-1 hover:bg-gray-600 hover:transform hover:scale-105 transition duration-300" href="/ingredients">Get Started!</Link>
        </div>
      </div>
    </main>
  );
}
