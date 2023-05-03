import { Subscriber } from "src/app/models/authSubscriber";

class ApplicationStorageService {

  subscribers: Map<string, Subscriber[]>;

  constructor() {
    this.subscribers = new Map<string, Subscriber[]>();
  }

  addValueToStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value);
    this.subscribers.get(key)?.forEach(x => x.func());
  }

  getValueFromStorage(key: string): string {
    let result = window.localStorage.getItem(key);
    return result ? result : "";
  }

  removeValueFromStorage(key: string): void {
    window.localStorage.removeItem(key);
    this.subscribers.get(key)?.forEach(x => x.func());
  }

  clear(): void {
    return window.localStorage.clear();
  }
}

export const applicationStorageService  = new ApplicationStorageService();