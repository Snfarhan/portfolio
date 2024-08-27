"use client";

import Link from "next/link";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {

  return (
    <header className="py-8 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Farhan<span className="text-cyan-500">.</span>
          </h1>
        </Link>

        {/* Desktop Nav and Contact */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Mobile Nav and Contact */}
        <div className="xl:hidden flex items-center gap-4">
          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
