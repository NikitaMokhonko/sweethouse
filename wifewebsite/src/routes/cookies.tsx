import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/cookies")({
  component: RouteComponent,
});

function RouteComponent() {
  // Track page visit on mount
  useEffect(() => {
    fetch("http://localhost:8080/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: "cookies" }),
    }).catch((err) => console.error("Tracking failed:", err));
  }, []);
  return (
    <div className="sm:bg-[url('/wavycookies.svg')] bg-no-repeat bg-cover">
      <div className="min-h-screen max-w-[80%] sm:max-w-[65%] mx-auto pb-20">
        <div className="text-center text-5xl sm:pt-40 pt-20 mb-20 sm:mb-40">
          <h1
            className="underline underline-offset-15 decoration-1"
            style={{ fontFamily: "Parisienne, cursive" }}
          >
            Our Cookies
          </h1>
        </div>
        <div className="sm:border-1 bg-[#e4e0d5] sm:py-25 sm:px-25">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <img
              className="sm:h-100 h-70 sm:w-100 w-70 border-1 border-stone-300 rounded-3xl"
              src="/Cookie1.JPG"
              alt="Cookies"
            />
            <div className="text-center rounded-4xl sm:max-w-[50%] max-w-[70%] rounded-l-none pt-10 sm:pt-0">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Chocolate Chip Cookies
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our chocolate chip cookies are a timeless classic, featuring a
                perfect blend of rich chocolate chunks and a buttery, chewy
                texture that melts in your mouth.
              </h2>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between mt-10 items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <div className="text-center rounded-4xl sm:max-w-[50%] max-w-[70%] rounded-l-none pt-10 sm:pt-0">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Chocolate Chip Cookies
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our chocolate chip cookies are a timeless classic, featuring a
                perfect blend of rich chocolate chunks and a buttery, chewy
                texture that melts in your mouth.
              </h2>
            </div>
            <img
              className="sm:h-100 h-70 sm:w-100 w-70 border-1 border-stone-300 rounded-3xl"
              src="/Cookie1.JPG"
              alt="Cookies"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between mt-20 items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <img
              className="sm:h-100 h-70 sm:w-100 w-70 border-1 border-stone-300 rounded-3xl"
              src="/Cookie1.JPG"
              alt="Cookies"
            />
            <div className="text-center rounded-4xl sm:max-w-[50%] max-w-[70%] rounded-l-none pt-10 sm:pt-0">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Chocolate Chip Cookies
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our chocolate chip cookies are a timeless classic, featuring a
                perfect blend of rich chocolate chunks and a buttery, chewy
                texture that melts in your mouth.
              </h2>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between mt-20 items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <div className="text-center rounded-4xl sm:max-w-[50%] max-w-[70%] rounded-l-none pt-10 sm:pt-0">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Chocolate Chip Cookies
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our chocolate chip cookies are a timeless classic, featuring a
                perfect blend of rich chocolate chunks and a buttery, chewy
                texture that melts in your mouth.
              </h2>
            </div>
            <img
              className="sm:h-100 h-70 sm:w-100 w-70 border-1 border-stone-300 rounded-3xl"
              src="/Cookie1.JPG"
              alt="Cookies"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
