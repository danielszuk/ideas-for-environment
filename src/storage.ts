import {StorageKey} from "./models/storage-keys";

export const storageSet = (key: StorageKey, value: any): Promise<void> => {
    return new Promise(resolve => {
        if (chrome.storage) {
            chrome.storage.sync.set( {[key]: value}, () => resolve() );
        } else {
            // if we are not in chrome environment (e.x. development) fallback to localStorage
            console.warn('chrome.storage not available. fallback to localStorage.');
            window.localStorage.setItem(key, JSON.stringify(value));
            resolve();
        }
    });
};

export const storageGet = <T>(key: StorageKey): Promise<T> => {
    return new Promise(resolve => {
        if (chrome.storage) {
            chrome.storage.sync.get([key], (result) => {
                resolve(result[key]);
            });
        } else {
            // if we are not in chrome environment (e.x. development) fallback to localStorage
            console.warn('chrome.storage not available. fallback to localStorage.');
            const item = window.localStorage.getItem(key);
            resolve(item ? JSON.parse(item) : item);
        }
    });
};