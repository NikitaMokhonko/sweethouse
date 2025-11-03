export default function WelcomeScreen() {
  return (
    <>
      <div className="">
        <div className=" flex bg-[#e4e0d5] text-black justify-center align-middle">
          <img
            src="/Sweethouse.png"
            alt="Logo"
            className="mt-10 mb-10 h-80 w-80"
          />
        </div>
        <div className="flex bg-[#e4e0d5] text-black justify-center align-middle items-center relative overflow-hidden h-28">
          <h1 className="mt-1 text-xl md:text-5xl pb-10 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:whitespace-nowrap lg:animate-[welcome-move_4s_linear_forwards] font-[Parisienne,cursive]">
            Welcome to Sweethouse Pâtisserie !
          </h1>
          <img
            src="train.png"
            alt="Train"
            className="hidden lg:block absolute pb-10 w-40  object-contain animate-train"
            style={{
              animation: "train-move 6.7s linear forwards",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <style>
            {`
              @keyframes train-move {
          from { left: 16.5%; }
          to { left: 100%; }
              }
              @keyframes welcome-move {
          from { left: 0; }
          to { left: 50%; }
              }
              .animate-train {
          position: absolute;
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
}
