import { makeObservable } from "mobx";
import BaseStore from "./BaseStore";
import VehicleModelService from "../services/VehicleModelService.js";

class VehicleModelStore extends BaseStore {
  constructor() {
    super();
    makeObservable(this);
  }

  fetchVehicleModels({
    pageSize,
    lastVisible,
    sortBy,
    sortDirection,
    filters,
    currentPage,
  }) {
    this.fetchAll(() =>
      VehicleModelService.fetchVehicleModelsService({
        pageSize,
        lastVisible,
        sortBy,
        sortDirection,
        filters,
        currentPage,
      })
    );
  }

  fetchVehicleModelById(id) {
    this.fetchOne(VehicleModelService.getById, id);
  }

  createVehicleModel(modelData) {
    this.create(VehicleModelService.create, modelData);
  }

  updateVehicleModel(id, modelData) {
    this.update(VehicleModelService.update, id, modelData);
  }

  deleteVehicleModel(id) {
    this.delete(VehicleModelService.delete, id);
  }

  fetchPreviousPage(sortBy, sortDirection, pageSize, startAt, currentPage) {
    this.fetchAll(() =>
      VehicleModelService.fetchNextPageVehicleModelsService({
        sortBy,
        sortDirection,
        pageSize,
        currentPage,
      })
    );
  }

  fetchNextPage({ sortBy, sortDirection, pageSize, startAt, currentPage }) {
    this.fetchAll(() =>
      VehicleModelService.fetchNextPageVehicleModelsService({
        sortBy,
        sortDirection,
        pageSize,
        currentPage,
      })
    );
  }
}

export default new VehicleModelStore();
