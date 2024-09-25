import { useLocation } from "react-router-dom";

function Title() {
  const location = useLocation();

  const titles = {
    "/": "Vehicle Models List",
    "/vehicle-makes": "Vehicle Makes List",
    "/manufactor-list": "Manufactor List",
    "/new-manufactor": "Add New Manufactor",
    "/new-vehicle": "Add New Vehicle Model",
    "/update-vehicle": "Update Vehicle Model",
  };

  const title = titles[location.pathname] || "";

  return (
    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 my-4">
      {title}
    </h2>
  );
}

export default Title;
