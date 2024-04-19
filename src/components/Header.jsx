import logo from "../assets/logosaf2.png"
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="bg-white border-b-2 shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-6 max-w-6xl mx-auto">
        <div>
          <img src={logo} alt="saftechlogo" className="h-20 w-20 cursor-pointer"/>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li>Home</li>
          </ul>
        </div>
        <form className="w-[400px] relative">
          <div className="relative">
            <input type="search" placeholder="Search Here" className="w-full p-4
             rounded-full bg-slate-50" />
             <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 
              rounded-full">
             <IoSearchSharp />
             </button>
          </div>
        </form>
        <div>
          <ul>
            <li className="text-orange-500 hover:text-zinc-700 cursor-pointer"> 0714215201 </li>
            <li className="text-orange-500 hover:text-zinc-700 cursor-pointer">www.saftechdigital.co.ke</li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
