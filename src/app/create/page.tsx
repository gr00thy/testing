"use client";

import { useState } from "react";
import { addBrand } from "../../utils/api";
import { useRouter } from "next/navigation";

export default function CreatePage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBrand({ id: 0, name, description });
    router.push("/");
  };

  return (
    <main>
      <h1>Crear Nueva Marca</h1>
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
    </main>
  );
}