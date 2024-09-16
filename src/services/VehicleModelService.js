import { db } from "../firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAt,
} from "firebase/firestore";

class VehicleModelService {
  static async fetchVehicleModelsService({
    pageSize,
    lastVisible,
    sortBy,
    sortDirection,
    filters,
    currentPage,
  }) {
    try {
      const modelsQuery = query(
        collection(db, "VehicleModels"),
        orderBy(sortBy, sortDirection),
        limit(pageSize)
      );

      const querySnapshot = await getDocs(modelsQuery);

      const vehicleModels = querySnapshot.docs.map((doc) => ({
        id: doc.data().id,
        makeId: doc.data().makeId,
        name: doc.data().name,
        abrv: doc.data().abrv,
      }));

      return vehicleModels;
    } catch (error) {
      console.error("Error fetching vehicle models: ", error);
      throw error;
    }
  }

  static async fetchNextPageVehicleModelsService({
    sortBy,
    sortDirection,
    pageSize,
    currentPage,
  }) {
    try {
      const modelsQuery = query(
        collection(db, "VehicleModels"),
        orderBy(sortBy, sortDirection),
        limit(pageSize),
        startAt(currentPage)
      );

      const querySnapshot = await getDocs(modelsQuery);

      const vehicleModels = querySnapshot.docs.map((doc) => ({
        id: doc.data().id,
        makeId: doc.data().makeId,
        name: doc.data().name,
        abrv: doc.data().abrv,
      }));

      return vehicleModels;
    } catch (error) {
      console.error("Error fetching vehicle models: ", error);
      throw error;
    }
  }
}
export default VehicleModelService;

/* static async fetchVehicleModels2() {
  try {
    const response = await fetch(
      "https://firestore.googleapis.com/v1/projects/monoapi-85701/databases/(default)/documents/VehicleModels"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch vehicle models");
    }

    const data = await response.json();

    return data.documents.map((doc) => ({
      id: doc.fields.Id.integerValue,
      makeId: doc.fields.MakeId.integerValue,
      name: doc.fields.Name.stringValue,
      abrv: doc.fields.Abrv.stringValue,
    }));
  } catch (error) {
    console.log("error: " + error);
    throw error;
  } 
}*/
