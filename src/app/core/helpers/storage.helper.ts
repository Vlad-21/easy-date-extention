import {TStorageKey} from '../enums';


export class StorageHelper {
  public static setToLocalStorage<T>(key: TStorageKey, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getFromLocalStorage<T>(key: TStorageKey): T | null {
    const value = localStorage.getItem(key);
    if (!value) return null;

    return JSON.parse(value) as T;
  }

  public static deleteFromLocalStorage(key: TStorageKey): void {
    localStorage.removeItem(key);
  }

  public static clearLocalStorage(): void {
    localStorage.clear();
  }
}
