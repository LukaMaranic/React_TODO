import { Link } from "react-router-dom";

export default function ManufactorTable() {
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Abrv</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bayerische Motoren Werke</td>
          <td>BWM</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ford Motor Company</td>
          <td>Ford</td>
          <td>
            <button>
              <Link to="/update-manufactor">Update manufactor</Link>
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Gesellschaft zur Vorbereitung des Deutschen Volkswagens mbH</td>
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
