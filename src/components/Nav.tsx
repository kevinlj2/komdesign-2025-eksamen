import { Link } from "react-router";
export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Hoved artikkel</Link>
      <Link to="/contact">Kort artikkel 1</Link>
      <Link to="/contact">Kort artikkel 2</Link>
      <Link to="/contact">Kort artikkel 3</Link>
    </nav>
  );
}
