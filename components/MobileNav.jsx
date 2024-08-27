"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "profile",
        path: "/profile",
    },
    {
        name: "projects",
        path: "/projects",
    },
]

const MobileNav = () => {
  const pathname = usePathname();  
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CgMenuGridO className="text-[32px] text-cyan-500"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-32 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Farhan<span className="text-cyan-500">.</span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
              {links.map((link,index)=>{
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-cyan-500 border-b-2 border-cyan-500"} text-xl capitalize hover:text-cyan-500 transition-all`}>
                {link.name}
            </Link>
              })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav