import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Vehicle list</Link>
          </li>
          <li>
            <Link to="/manufactor-list">Manufactor list</Link>
          </li>
          <li>
            <Link to="/new-manufactor">Create new manufactor</Link>
          </li>
          <li>
            <Link to="/new-vehicle">Create new vehicle</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
