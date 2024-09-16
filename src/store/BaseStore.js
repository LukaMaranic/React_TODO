import { makeObservable, observable, action, runInAction } from "mobx";

class BaseStore {
  items = [];
  currentItem = null;
  loading = false;
  error = null;

  constructor() {
    makeObservable(this, {
      items: observable,
      currentItem: observable,
      loading: observable,
      error: observable,
      setItems: action,
      setCurrentItem: action,
      setLoading: action,
      setError: action,
    });
  }

  async fetchAll(serviceMethod) {
    this.setLoading(true);
    try {
      const data = await serviceMethod();
      runInAction(() => {
        this.setItems(data);
      });
    } catch (error) {
      console.log("Error: " + error);
      runInAction(() => {
        this.setError(error.message || "Failed to load data");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async fetchOne(serviceMethod, id) {
    this.setLoading(true);
    try {
      const data = await serviceMethod(id);
      runInAction(() => {
        this.setCurrentItem(data);
      });
    } catch (error) {
      runInAction(() => {
        this.setError(error.message || "Failed to load data");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async create(serviceMethod, itemData) {
    this.setLoading(true);
    try {
      const data = await serviceMethod(itemData);
      runInAction(() => {
        this.items.push(data);
      });
    } catch (error) {
      runInAction(() => {
        this.setError(error.message || "Failed to create item");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async update(serviceMethod, id, itemData) {
    this.setLoading(true);
    try {
      const data = await serviceMethod(id, itemData);
      runInAction(() => {
        this.items = this.items.map((item) => (item.id === id ? data : item));
      });
    } catch (error) {
      runInAction(() => {
        this.setError(error.message || "Failed to update item");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async delete(serviceMethod, id) {
    this.setLoading(true);
    try {
      await serviceMethod(id);
      runInAction(() => {
        this.items = this.items.filter((item) => item.id !== id);
      });
    } catch (error) {
      runInAction(() => {
        this.setError(error.message || "Failed to delete item");
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  setItems(items) {
    console.log("Old items:", this.items);
    console.log("New items:", items);

    this.items = items;
    console.log("Updated items:", this.items);
  }

  setCurrentItem(item) {
    this.currentItem = item;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setError(error) {
    this.error = error;
  }
}

export default BaseStore;
