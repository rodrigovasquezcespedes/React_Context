import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center p-2 mx-2 fs-4 bg-secondary">
      <Link className="p-1" to="/"> Home </Link> | <Link className="p-1" to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
