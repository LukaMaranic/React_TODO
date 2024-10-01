import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import VehicleModelStore from "../../store/VehicleModelStore";
import Pagination from "../common/Pagination";
import { Link, redirect } from "react-router-dom";

const VehicleModelTable = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [lastVisible, setLastVisible] = useState(null);
  const [sortBy, setSortBy] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchVehicleModels();
  }, []);

  const fetchVehicleModels = async () => {
    const response = await VehicleModelStore.fetchVehicleModels({
      pageSize,
      lastVisible,
      sortBy,
      sortDirection,
      filters,
      currentPage,
    });

    if (response) {
      const { vehicleModels, lastVisible: lastDoc } = response;
      setLastVisible(lastDoc);
    }
  };

  const handleSort = (field) => {
    const direction =
      sortBy === field && sortDirection === "asc" ? "desc" : "asc";
    setSortBy(field);
    setSortDirection(direction);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1;

      VehicleModelStore.fetchNextPage({
        sortBy,
        sortDirection,
        pageSize,
        currentPage: newPage,
      });
      return newPage;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.max(1, prevPage - 1);
      VehicleModelStore.fetchNextPage({
        sortBy,
        sortDirection,
        pageSize,
        currentPage: newPage,
      });
      return newPage;
    });
  };

  const handleDelete = (docId) => {
    VehicleModelStore.deleteVehicleModel(docId);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-9">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          onChange={handleFilterChange}
          className="border p-2"
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3"
              onClick={() => handleSort("id")}
            >
              <div className="flex items-center">Id</div>
            </th>
            <th
              scope="col"
              className="px-6 py-3"
              onClick={() => handleSort("makeId")}
            >
              <div className="flex items-center">Make Id</div>
            </th>
            <th
              scope="col"
              className="px-6 py-3"
              onClick={() => handleSort("name")}
            >
              <div className="flex items-center">Name</div>
            </th>
            <th
              scope="col"
              className="px-6 py-3"
              onClick={() => handleSort("abrv")}
            >
              <div className="flex items-center">Abrv</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {VehicleModelStore.items.length > 0 ? (
            VehicleModelStore.items.map((item, index) => (
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.makeId}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.abrv}</td>
                <td className="px-6 py-4">
                  <Link
                    to={"/update-vehicle?id=" + item.id}
                    state={{
                      docId: item.docId,
                      id: item.id,
                      makeId: item.makeId,
                      name: item.name,
                      abrv: item.abrv,
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <a
                    className="px-6 py-4"
                    href="#"
                    onClick={() => handleDelete(item.docId)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
});

export default VehicleModelTable;
