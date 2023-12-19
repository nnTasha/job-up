import { FormValues } from './types';

const storageKey = 'user_Data';

export const createUserRecord = (data: FormValues) => {
  console.log(data, 'from create Record');
  const storedData = localStorage.getItem(storageKey);
  const existingData = storedData ? JSON.parse(storedData) : [];
  existingData.push(data);

  localStorage.setItem(storageKey, existingData);
};
