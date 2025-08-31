import { useNavigate } from "@tanstack/react-router";
import ScrollArrow from "../components/ScrollArrow.tsx";

export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      <ScrollArrow />
      <div className="min-h-screen">
        <div className=" bg-[url('/manywaves.svg')] border-stone-300 w-full bg-top pb-15 bg-cover">
          <div
            onClick={() => navigate({ to: "/cookies" })}
            className="flex mt-20 items-center cursor-pointer border-1 bg-[#e4e0d5] max-w-[50%] mx-auto rounded-3xl"
          >
            <img
              className="h-100 w-100 rounded-3xl rounded-r-none"
              src="/Cookie1.JPG"
            />
            <div className="text-center rounded-4xl rounded-l-none px-15 ">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Cookies
              </h1>
              <h2 className="text-xl text-center mt-2">
                Our cookies are made with the finest ingredients, ensuring a
                perfect balance of flavor and texture.
              </h2>
            </div>
          </div>
          <div
            onClick={() => navigate({ to: "/cakes" })}
            className="flex mt-20 items-center cursor-pointer border-1 bg-[#f8f5ed] max-w-[50%] mx-auto rounded-3xl"
          >
            <div className="text-center rounded-4xl rounded-r-none px-15 ">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Cakes
              </h1>
              <h2 className="text-xl text-center mt-2">
                Our cakes are a celebration of flavor and artistry, crafted to
                delight your senses on every occasion.
              </h2>
            </div>
            <img
              className="h-100 w-100  rounded-3xl rounded-l-none"
              src="/Cakes.JPG"
            />
          </div>
          <div
            onClick={() => navigate({ to: "/tartes" })}
            className="flex mt-20 cursor-pointer items-center border-1 bg-[#faf8f2] max-w-[50%] mx-auto rounded-3xl"
          >
            <img
              className="h-100 w-100 rounded-3xl rounded-r-none"
              src="/Tartes.JPG"
            />
            <div className="text-center rounded-4xl rounded-l-none px-15 ">
              <h1
                style={{ fontFamily: "Parisienne, cursive" }}
                className="text-3xl text-center"
              >
                Tartes
              </h1>
              <h2 className="text-xl text-center mt-2">
                Our tartes are crafted with a buttery crust and filled with
                luscious fruits, creating a delightful treat for any occasion.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
