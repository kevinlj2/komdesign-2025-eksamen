import { useState } from "react";

export default function Readmore({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-prose mx-auto background-white">
      <p className="font-serif">
        <span className="float-left text-[70px] leading-[66px] mr-[6px] mb-[5px]">N</span>orske myndigheter har hatt et viktig mål veldig lenge når det kommer
        til studentutveksling. Målet er at minst halvparten av studenter som har
        fullført en grad, skal ha vært på utveksling i utlandet. Dette inkluderer da Anneli Lirhus Evertsen som dro på utveksling til
        Sør-Korea.
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
