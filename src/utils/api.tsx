import { Brand } from "../types/brand";
import { brands } from "../mock/brands";

export const fetchBrands = (): Promise<Brand[]> => {
  return Promise.resolve(brands);
};

export const addBrand = (brand: Brand): Promise<Brand> => {
  const newBrand = { ...brand, id: brands.length + 1 };
  brands.push(newBrand);
  return Promise.resolve(newBrand);
};

export const updateBrand = (id: number, updatedBrand: Brand): Promise<Brand> => {
  const index = brands.findIndex((b) => b.id === id);
  if (index === -1) throw new Error("Brand not found");
  brands[index] = { ...brands[index], ...updatedBrand };
  return Promise.resolve(brands[index]);
};

export const deleteBrand = (id: number): Promise<void> => {
  const index = brands.findIndex((b) => b.id === id);
  if (index === -1) throw new Error("Brand not found");
  brands.splice(index, 1);
  return Promise.resolve();
};