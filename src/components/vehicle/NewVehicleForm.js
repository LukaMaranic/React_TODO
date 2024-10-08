import { observer } from "mobx-react";
import VehicleModelStore from "../../store/VehicleModelStore";
import { useState } from "react";

const NewVehicleForm = observer(() => {
  const [modelId, setModelId] = useState(0);
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleAbbr, setVehicleAbbr] = useState("");

  function handleVehicleModelChange(e) {
    setModelId(e.target.value);
  }

  function handleVehicleNameChange(e) {
    setVehicleName(e.target.value);
  }

  function handleVehicleAbbrvChange(e) {
    setVehicleAbbr(e.target.value);
  }

  return (
    <form class="mx-40 my-20">
      <div class="grid gap-6 mb-6 md:grid-cols-2"></div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Make Id:
        </label>
        <input
          type="number"
          id="makeId"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          value={modelId}
          onChange={handleVehicleModelChange}
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Vehicle name:
        </label>
        <input
          type="text"
          id="manfName"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
          value={vehicleName}
          onChange={handleVehicleNameChange}
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Vehicle abbrivation:
        </label>
        <input
          type="text"
          id="manf_abrv"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={vehicleAbbr}
          onChange={handleVehicleAbbrvChange}
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault();
          VehicleModelStore.createVehicleModel({
            makeId: modelId,
            name: vehicleName,
            abrv: vehicleAbbr,
          });
        }}
      >
        Submit
      </button>
    </form>
  );
});

export default NewVehicleForm;
