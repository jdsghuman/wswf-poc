import { CircleUser } from "lucide-react";
import Container from "./container";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = async () => {
  return (
    <>
      <div className="border-b">
        <Container>
          <nav>
            <div className="relative pl-0 max-sm:pl-2 px-2 sm:px-2 md:px-4 flex justify-between h-16 items-center font-bold text-xl">
              WSWF
              <div className="pr-2">
                <SignedOut>
                  <SignInButton>
                    <div className="flex cursor-pointer">
                      <CircleUser size={26} strokeWidth={1.4} />
                      <p className="self-center ml-1.5 text-xs relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#113A85] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        Sign in
                      </p>
                    </div>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
