import { makeObservable } from "mobx";
import BaseStore from "./BaseStore";
import VehicleMakeService from "../services/VehicleMakeService";

class VehicleMakeStore extends BaseStore {
  constructor() {
    super();
    makeObservable(this); // Inherited observables and actions are still managed by MobX
  }

  fetchVehicleMakes() {
    this.fetchAll(VehicleMakeService.getAll);
  }

  fetchVehicleMakeById(id) {
    this.fetchOne(VehicleMakeService.getById, id);
  }

  createVehicleMake(makeData) {
    this.create(VehicleMakeService.create, makeData);
  }

  updateVehicleMake(id, makeData) {
    this.update(VehicleMakeService.update, id, makeData);
  }

  deleteVehicleMake(id) {
    this.delete(VehicleMakeService.delete, id);
  }
}

export default new VehicleMakeStore();
