import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="w-full">
      <div className="text-center py-4">
        <h1 className="text-4xl font-serif font-bold text-black text-center">
          GRUPPE X
        </h1>
      </div>
      <nav className="w-full bg-cyan-700">
        <ul className="flex justify-center gap-10 py-3 text-lg font-medium text-white">
          <li>
            <Link to="/" className="hover:underline" style={{ color: "white" }}>
              Hjem
            </Link>
          </li>
          <li>
            <Link
              to="/jorda-rundt-studenter-på-utveksling"
              className="hover:underline"
              style={{ color: "white" }}
            >
              Jorda rundt
            </Link>
          </li>
          <li>
            <Link
              to="/stridsvogner-mot-johannes"
              className="hover:underline"
              style={{ color: "white" }}
            >
              Stridsvogner
            </Link>
          </li>
          <li>
            <Link
              to="/framtidsuka-i-halden-vekker-nysgjerrighet-og-kreativitet"
              className="hover:underline"
              style={{ color: "white" }}
            >
              Fremtidsuka
            </Link>
          </li>
          <li>
            <Link
              to="/skjerm-for-leggetid-skaper-sovnkrise-vi-ser-en-stille-helseutfordring-vokse-sier-forskere"
              className="hover:underline"
              style={{ color: "white" }}
            >
              Skjermtid
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
