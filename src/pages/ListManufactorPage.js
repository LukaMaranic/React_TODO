import Navigation from "../components/common/Navigation";
import VehicleManufactorTable from "../components/manufactor/VehicleManufactorTable";
import Pagination from "../components/common/Pagination";
import Title from "../components/common/Title";

export default function ListManufactorPage() {
  return (
    <>
      <Navigation />
      <Title />
      <VehicleManufactorTable />
      <Pagination />
    </>
  );
}
