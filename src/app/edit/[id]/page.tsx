"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchBrands, updateBrand } from "../../../utils/api";
import { Brand } from "../../../types/brand";
import { use } from "react";

export default function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params); // Desempaquetar params con use()
  const { id } = unwrappedParams;

  const [brand, setBrand] = useState<Brand | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchBrands().then((brands) => {
      const existingBrand = brands.find((b) => b.id === Number(id));
      if (existingBrand) {
        setBrand(existingBrand);
        setName(existingBrand.name);
        setDescription(existingBrand.description);
      }
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand) return;
    await updateBrand(brand.id, { ...brand, name, description });
    router.push("/");
  };

  return (
    <main>
      <h1>Editar Marca</h1>
      {brand && (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Descripción:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <button type="submit">Guardar</button>
        </form>
      )}
    </main>
  );
}