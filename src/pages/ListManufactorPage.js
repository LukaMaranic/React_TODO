import Navigation from "../components/common/Navigation";
import VehicleManufactorTable from "../components/manufactor/VehicleManufactorTable";

export default function ListManufactorPage() {
  return (
    <>
      <Navigation />
      <h1>Manufactor list</h1>
      <VehicleManufactorTable />
    </>
  );
}
