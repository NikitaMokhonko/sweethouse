import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/tartes")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    fetch("http://localhost:8080/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: "tartes" }),
    }).catch((err) => console.error("Tracking failed:", err));
  }, []);
  return (
    <div className="bg-[url('/wavycookies.svg')] bg-no-repeat bg-cover">
      <div className="min-h-screen max-w-[65%] mx-auto pb-20">
        <div className="text-center text-5xl pt-40 mb-40">
          <h1
            className="underline underline-offset-15 decoration-1"
            style={{ fontFamily: "Parisienne, cursive" }}
          >
            Our Tartes
          </h1>
        </div>
        <div className="border-1 bg-[#e4e0d5] py-25 px-25">
          <div className="flex justify-between items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <img
              className="h-100 w-100 border-1 border-stone-300 rounded-3xl"
              src="/Tartes.JPG"
              alt="Tartes"
            />
            <div className="text-center rounded-4xl max-w-[50%] rounded-l-none">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Fruit Tartes
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our tartes are crafted with a buttery crust and filled with
                luscious fruits, creating a delightful treat for any occasion.
              </h2>
            </div>
          </div>
          <div className="flex justify-between mt-10 items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <div className="text-center rounded-4xl max-w-[50%] rounded-l-none">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Chocolate Tartes
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our tartes are crafted with a buttery crust and filled with
                luscious fruits, creating a delightful treat for any occasion.
              </h2>
            </div>
            <img
              className="h-100 w-100 border-1 border-stone-300 rounded-3xl"
              src="/Tartes.JPG"
              alt="Tartes"
            />
          </div>
          <div className="flex justify-between mt-20 items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <img
              className="h-100 w-100 border-1 border-stone-300 rounded-3xl"
              src="/Tartes.JPG"
              alt="Tartes"
            />
            <div className="text-center rounded-4xl max-w-[50%] rounded-l-none">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Vanilla Tartes
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our tartes are crafted with a buttery crust and filled with
                luscious fruits, creating a delightful treat for any occasion.
              </h2>
            </div>
          </div>
          <div className="flex justify-between mt-20 items-center bg-[#e4e0d5] mx-auto rounded-3xl">
            <div className="text-center rounded-4xl max-w-[50%] rounded-l-none">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Cherry Tartes
              </h1>
              <h2 className="text-xl text-center mt-5">
                Our tartes are crafted with a buttery crust and filled with
                luscious fruits, creating a delightful treat for any occasion.
              </h2>
            </div>
            <img
              className="h-100 w-100 border-1 border-stone-300 rounded-3xl"
              src="/Tartes.JPG"
              alt="Tartes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
