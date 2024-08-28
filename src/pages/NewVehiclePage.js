import Navigation from "../components/common/Navigation";
import NewVehicleForm from "../components/vehicle/NewVehicleForm";

export default function NewVehiclePage() {
  return (
    <>
      <Navigation />
      <h1>New Vehicle</h1>
      <NewVehicleForm />
    </>
  );
}
