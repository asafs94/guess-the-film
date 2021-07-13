import { StorageKey } from "../constants/storage.constants";

type AppStorage = {
  [StorageKey.Statistics]: Statistics
}


class AppStorageManager {

  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage
  }


  getItem = <T extends StorageKey>(key: StorageKey): AppStorage[T] => {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem = <T extends StorageKey>(key: StorageKey, value: AppStorage[T]) => {
    const stringifiedValue = JSON.stringify(value);
    return this.storage.setItem(key, stringifiedValue);
  }

  clear = () => {
    return this.storage.clear();
  }

  length = () => {
    return this.storage.length;
  }

  removeItem = (key: StorageKey) => {
    return this.storage.removeItem(key)
  }
}


export default new AppStorageManager(sessionStorage);
