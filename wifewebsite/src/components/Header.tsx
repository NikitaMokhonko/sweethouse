import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="border-b-1 pt-1 align-center">
        <div className="flex pl-2 pr-4 justify-between items-center bg-[#e4e0d5]">
          <img
            src="/Textlogo.png"
            alt="Logo"
            className="h-14 cursor-pointer w-44"
            onClick={() => navigate({ to: "/" })}
          />

          <div className="hidden md:flex gap-20 pr-10 flex-row justify-center items-center">
            <details className="group relative">
              <summary
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-black text-2xl m-4 cursor-pointer flex items-center"
              >
                Our Selection
                <img
                  src="/arrowdown.png"
                  alt="Dropdown Icon"
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 text-2xl bg-[#e4e0d5] border border-black shadow-lg z-10"
                style={{ fontFamily: "Parisienne, cursive" }}
              >
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-[#f8f6ee]"
                  onClick={() => navigate({ to: "/cookies" })}
                >
                  Cookies
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-[#f8f6ee]"
                  onClick={() => navigate({ to: "/cakes" })}
                >
                  Cakes
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-[#f8f6ee]"
                  onClick={() => navigate({ to: "/tartes" })}
                >
                  Tartes
                </button>
              </div>
            </details>

            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              className="text-black cursor-pointer text-2xl m-4"
              onClick={() => navigate({ to: "/about" })}
            >
              About Us
            </button>
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              className="text-black cursor-pointer text-2xl m-4"
              onClick={() => navigate({ to: "/contact" })}
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  style={{ fontFamily: "Parisienne, cursive" }}
                  className="text-black text-2xl cursor-pointer"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-black transition ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col bg-[#e4e0d5] border-t border-black p-4 space-y-4">
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              onClick={() => {
                navigate({ to: "/cookies" });
                setMenuOpen(false);
              }}
            >
              Cookies
            </button>
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              onClick={() => {
                navigate({ to: "/cakes" });
                setMenuOpen(false);
              }}
            >
              Cakes
            </button>
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              onClick={() => {
                navigate({ to: "/tartes" });
                setMenuOpen(false);
              }}
            >
              Tartes
            </button>
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              onClick={() => {
                navigate({ to: "/about" });
                setMenuOpen(false);
              }}
            >
              About Us
            </button>
            <button
              style={{ fontFamily: "Parisienne, cursive" }}
              onClick={() => {
                navigate({ to: "/contact" });
                setMenuOpen(false);
              }}
            >
              Contact
            </button>

            <SignedOut>
              <SignInButton>
                <button style={{ fontFamily: "Parisienne, cursive" }}>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        )}
      </div>

      <Marquee speed={30} autoFill={true} className="border-b-1 py-1">
        Open Saturday & Sunday 10am - 6pm 🍪 &nbsp;&nbsp;&nbsp; Pickup At
        Spanielgatan 2, 11548 Stockholm 📦 &nbsp;&nbsp;&nbsp;
      </Marquee>
    </header>
  );
}
