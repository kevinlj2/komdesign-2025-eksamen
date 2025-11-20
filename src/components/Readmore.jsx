import { useState } from "react";

export default function Readmore({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-prose mx-auto text-left background-white">
      <p className="font-serif">
        Norske myndigheter har hatt et viktig mål veldig lenge når det kommer
        til studentutveksling. Målet er at minst halvparten av studenter som har
        fullført en grad, skal ha vært på utveksling i utlandet.
      </p>
      <div className={`${open ? "block" : "hidden"} mt-2`}>{children}</div>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 !bg-transparent !border-0  p-0 text-gray-600 italic"
      >
        {open ? "Les mindre" : "Les mer"}
      </button>
    </div>
  );
}
