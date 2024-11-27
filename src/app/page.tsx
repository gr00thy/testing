"use client";

import { useEffect, useState } from "react";
import { fetchBrands, deleteBrand } from "../utils/api";
import { Brand } from "../types/brand";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchBrands().then(setBrands);
  }, []);

  const handleDelete = async (id: number) => {
    await deleteBrand(id);
    setBrands((prev) => prev.filter((brand) => brand.id !== id));
  };

  return (
    <main className="container">
      <h1>Registros de Marcas</h1>
      <button onClick={() => router.push("/create")}>Crear Nueva Marca</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>{brand.name}</td>
              <td>{brand.description}</td>
              <td>
                <button onClick={() => router.push(`/edit/${brand.id}`)}>
                  Editar
                </button>
                <button onClick={() => handleDelete(brand.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}