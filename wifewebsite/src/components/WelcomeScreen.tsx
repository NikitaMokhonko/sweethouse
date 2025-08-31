export default function WelcomeScreen() {
  return (
    <>
    <div className="">
      <div className=" flex bg-[#e4e0d5] text-black justify-center align-middle">
        <img src="/Sweethouse.png" alt="Logo" className="h-120 w-120" />
      </div>
      <div className="flex bg-[#e4e0d5] text-black justify-center align-middle items-center relative overflow-hidden h-34">
        <h1
          className="mt-1 text-5xl pb-10 absolute"
          style={{
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "50%",
            whiteSpace: "nowrap",
            animation: "welcome-move 4s linear forwards",
            fontFamily: "Parisienne, cursive",
          }}
        >
          Welcome to Sweethouse Pâtisserie !
        </h1>
        <img
          src="train.png"
          className="absolute pb-10 w-40  object-contain animate-train"
          style={{
            animation: "train-move 7s linear forwards",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <style>
          {`
              @keyframes train-move {
          from { left: 12.5%; }
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
