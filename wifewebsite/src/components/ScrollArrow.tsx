import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-3 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        showArrow ? "opacity-100" : "opacity-0"
      }`}
    >
        <img
          src="/arrowdown.svg"
          alt="Scroll down"
          className="h-10 w-10 animate-bounce"
        />
    </div>
  );
}
