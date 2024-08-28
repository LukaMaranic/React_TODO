import { Link } from "react-router-dom";

export default function VehicleModelTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>MakeId</th>
          <th>Name</th>
          <th>Abrv</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>iX M60</td>
          <td>BWM</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>1</td>
          <td>i5</td>
          <td>BWM</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>2</td>
          <td>Focus</td>
          <td>Ford</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>2</td>
          <td>Mustang</td>
          <td>Ford</td>
        </tr>
        <tr>
          <td>5</td>
          <td>3</td>
          <td>Golf</td>
          <td>Volkswagenwerk GmbH</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>3</td>
          <td>Polo</td>
          <td>Volkswagenwerk GmbH</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
