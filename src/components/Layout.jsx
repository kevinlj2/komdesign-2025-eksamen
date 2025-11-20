import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout({}) {
  return (
    <>
      <Nav />
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="w-full bg-cyan-700 text-white text-center py-6 mt-10">
        <p>© 2025 Gruppe X - Komdesign Eksamen</p>
      </footer>
    </>
  );
}
