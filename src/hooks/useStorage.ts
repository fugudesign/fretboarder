import { useEffect, useState } from 'react';

export enum StorageType {
  LOCAL = 'local',
  SESSION = 'session',
}

export function useStorage<T>(
  key: string,
  initialValue?: T,
  type?: StorageType
) {
  // Default type is LOCAL STORAGE
  const storage = window[`${type ?? StorageType.LOCAL}Storage`];

  const [currentKey, setCurrentKey] = useState<string>(key);

  const getInitialValue = () => {
    try {
      // Get from local storage by key
      const item = storage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  };

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    return getInitialValue();
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        storage.setItem(currentKey, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };

  useEffect(() => {
    if (key !== currentKey) {
      setCurrentKey(key);
      setStoredValue(getInitialValue());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, currentKey]);

  useEffect(() => {
    setValue(getInitialValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [storedValue, setValue] as const;
}
