export const PI = 3.1415;

export interface User {
  id: string;
  name: string;
}

export const generateId = () => Math.floor(Math.random() * 100);
