import Navigation from "../components/common/Navigation";
import VehicleModelTable from "../components/vehicle/VehicleModelTable";

export default function ListVehiclePage() {
  return (
    <>
      <Navigation />
      <h1>Vehicle list</h1>
      <VehicleModelTable />
    </>
  );
}
