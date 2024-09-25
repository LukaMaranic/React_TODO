import { observer } from "mobx-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import VehicleModelStore from "../../store/VehicleModelStore";

const UpdateVehicleForm = observer(() => {
  const location = useLocation();
  const [docId, setDocId] = useState(location.state.docId);
  const [id, setId] = useState(location.state.id);
  const [makeId, setMakeId] = useState(location.state.makeId);
  const [name, setName] = useState(location.state.name);
  const [abrv, setAbrv] = useState(location.state.abrv);

  const handleMakerIdChange = (e) => {
    setMakeId(e.target.value);
  };
  const handleMakerNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMakerAbrvChange = (e) => {
    setAbrv(e.target.value);
  };

  return (
    <>
      <form className="mx-40 my-20">
        <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
        <div className="mb-6">
          <label htmlFor="makeId">Make Id:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="dropdown"
            id="makeId"
            name="makeId"
            defaultValue={makeId}
            onChange={handleMakerIdChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="manufactorName">Manufactor name:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="manufactorName"
            name="manufactorName"
            defaultValue={name}
            onChange={handleMakerNameChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="manufactorAbrv">Manufactor abbrivation:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="manufactorAbrv"
            name="manufactorAbrv"
            defaultValue={abrv}
            onChange={handleMakerAbrvChange}
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            VehicleModelStore.updateVehicleModel({
              docId: docId,
              makeId: makeId,
              name: name,
              abrv: abrv,
            });
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
});

export default UpdateVehicleForm;
