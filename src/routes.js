import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListVehicleModelPage from "./pages/ListVehicleModelPage";
import ListManufactorPage from "./pages/ListManufactorPage";
import UpdateManufactorPage from "./pages/UpdateManufactorPage";
import UpdateVehiclePage from "./pages/UpdateVehiclePage";
import NewManufactorPage from "./pages/NewManufactorPage";
import NewVehiclePage from "./pages/NewVehiclePage";

function GetRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListVehicleModelPage />}></Route>
        <Route path="/manufactor-list" element={<ListManufactorPage />}></Route>
        <Route
          path="/update-manufactor"
          element={<UpdateManufactorPage />}
        ></Route>
        <Route path="/update-vehicle" element={<UpdateVehiclePage />}></Route>
        <Route path="/new-manufactor" element={<NewManufactorPage />}></Route>
        <Route path="/new-vehicle" element={<NewVehiclePage />}></Route>
      </Routes>
    </Router>
  );
}

export default GetRoutes;
