import { db } from "../firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAt,
  addDoc,
  updateDoc,
  doc,
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
        docId: doc.id,
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

  static async create(data) {
    try {
      const modelsQuery = query(collection(db, "VehicleModels"));

      const querySnapshot = await getDocs(modelsQuery);

      const idList = querySnapshot.docs.map((doc) => doc.data().id);
      console.log(idList);

      var lastId = null;
      switch (true) {
        case idList.length === 0:
          lastId = [0];
          break;
        case idList.length >= 1:
          lastId = idList.sort(function (a, b) {
            return b - a;
          });
          break;
      }

      const id = lastId[0] + 1;
      data["id"] = id;
      data["makeId"] = parseInt(data["makeId"]);
    } catch (error) {
      console.error("Error fetching id's models: ", error);
      throw error;
    }
    try {
      addDoc(collection(db, "VehicleModels"), {
        id: data.id,
        name: data.name,
        abrv: data.abrv,
        makeId: data.makeId,
      });
    } catch (error) {
      console.error("Error adding vehicle models: ", error);
      throw error;
    }
  }

  static async update(data) {
    const docRef = doc(db, "VehicleModels", data.docId);
    try {
      await updateDoc(docRef, {
        makeId: data.makeId,
        name: data.name,
        abrv: data.abrv,
      });
    } catch (error) {
      console.error("Error updating vehicle models: ", error);
      throw error;
    }
  }
}

export default VehicleModelService;
