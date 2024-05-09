import { MobileNavbar } from "./MobileNavbar";
import { Logo } from "./Logo";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Logo />
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNavbar />
      </div>
    </nav>
  );
};
