import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout({}) {
  return (
    <>
      <Nav />
      <main className="w-full max-w-6xl mx-auto">
        <Outlet />
      </main>
      <footer>
        <p>© 2025 Gruppe X - Komdesign Eksamen</p>
      </footer>
    </>
  );
}
