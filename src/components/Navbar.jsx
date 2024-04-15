import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="me-auto p-2 mx-2 fs-4 bg-secondary">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
