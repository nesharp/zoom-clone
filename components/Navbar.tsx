import Image from "next/image";
import Link from "next/link";
import { MobileNavbar } from "./MobileNavbar";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Logo />
      <div className="flex-between gap-5">
        {/* Clerk user management */}
        <MobileNavbar />
      </div>
    </nav>
  );
};
