import { useEffect, useState } from "react";

export default function Hero() {
  const [fadeValue, setFadeValue] = useState(1);
  const [heightValue, setHeightValue] = useState("100vh");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 1500;
      const collapseDistance = 1500;


      const opacity = Math.max(0, 1 - scrollY / fadeDistance);


      const newHeight = Math.max(
        0,
        100 - (scrollY / collapseDistance) * 100
      );

      setFadeValue(opacity);
      setHeightValue(`${newHeight}vh`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden transition-all duration-75"
      style={{
        height: heightValue,
        opacity: fadeValue,
      }}
    >
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/assets/videos/earth-rotate.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-16 pointer-events-none">
        <h1 className="!text-6xl font-bold text-black drop-shadow-lg font-roboto">
          Jorda rundt
        </h1>
        <p className="text-3xl text-gray-700 mt-2 drop-shadow-md">
          studenter på utveksling
        </p>
      </div>
    </section>
  );
}
