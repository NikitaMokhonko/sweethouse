import { useNavigate } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Marquee from "react-fast-marquee";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="border-b-1 pt-1 align-center">
        <div className="flex pl-2 pr-10 justify-between bg-[#e4e0d5]">
          <img
            src="/Textlogo.png"
            alt="Logo"
            className="h-14 cursor-pointer w-44"
            onClick={() => navigate({ to: "/" })}
          />

          <div className="flex gap-20 pr-40 flex-row justify-center items-center">
            <details className="group relative">
              <summary
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-black appearance-auto text-2xl m-4 cursor-pointer focus:outline-none relative flex items-center"
              >
                Our Selection
                <img
                  src="/arrowdown.png"
                  alt="Dropdown Icon"
                  className="inline-block ml-2 h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                />
                <span
                  className="absolute left-0 bottom-0 h-[1px] bg-black transition-all duration-300"
                  style={{
                    width: "var(--underline-width)",
                  }}
                  aria-hidden="true"
                />
              </summary>
              <style>
                {`
              details.group[open] summary span,
              details.group:hover summary span {
                --underline-width: 100%;
              }
              details.group summary span {
                --underline-width: 0;
              }
              `}
              </style>
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 text-2xl bg-[#e4e0d5] border border-black shadow-lg z-10"
                style={{ fontFamily: "Parisienne, cursive" }}
              >
                <button
                  className="block w-full text-left px-4 py-2 text-black hover:bg-[#f8f6ee] transition cursor-pointer"
                  onClick={() => navigate({ to: "/cookies" })}
                >
                  Cookies
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-black hover:bg-[#f8f6ee] transition cursor-pointer"
                  onClick={() => navigate({ to: "/cakes" })}
                >
                  Cakes
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-black hover:bg-[#f8f6ee] transition cursor-pointer"
                  onClick={() => navigate({ to: "/tartes" })}
                >
                  Tartes
                </button>
              </div>
            </details>

            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              className="text-black cursor-pointer text-2xl m-4 relative group"
              onClick={() => navigate({ to: "/about" })}
            >
              About Us
              <span
                className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </button>
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              className="text-black cursor-pointer text-2xl m-4 relative group"
              onClick={() => navigate({ to: "/contact" })}
            >
              Contact
              <span
                className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </button>
          </div>
          <SignedOut>
            <SignInButton>
              <button
                style={{ fontFamily: "Parisienne, cursive" }}
                className="group text-black text-2xl cursor-pointer relative"
              >
                <span className="relative">
                  Sign In
                  <span
                    className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <Marquee speed={30} autoFill={true} className="border-b-1 py-1">
        Open Saturday & Sunday 10am - 6pm 🍪 &nbsp;&nbsp;&nbsp; Pickup At Spanielgatan 2, 11548
        Stockholm 📦 &nbsp;&nbsp;&nbsp;
      </Marquee>
    </header>
  );
}
