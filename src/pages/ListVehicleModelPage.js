import Navigation from "../components/common/Navigation";
import Pagination from "../components/common/Pagination";
import Title from "../components/common/Title";
import VehicleModelTable from "../components/vehicle/VehicleModelTable";

export default function ListVehiclePage() {
  return (
    <>
      <Navigation />
      <Title />
      <VehicleModelTable />
    </>
  );
}
