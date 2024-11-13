import axios from 'axios';

const API_URL = 'https://9nmlpf1g-5000.asse.devtunnels.ms/items'; // Sesuaikan dengan URL API Anda

export interface Item {
  id: number;
  name: string;
}

export const getItems = () => axios.get<Item[]>(API_URL);
export const createItem = (data: Omit<Item, 'id'>) => axios.post<Item>(API_URL, data);
export const updateItem = (id: number, data: Omit<Item, 'id'>) => axios.put<Item>(`${API_URL}/${id}`, data);
export const deleteItem = (id: number) => axios.delete(`${API_URL}/${id}`);
