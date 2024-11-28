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
  const [myBrand, setMyBrand] = useState("");
  const [myHolder, setMyHolder] = useState("");
  const [myState, setMyState] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchBrands().then((brands) => {
      const existingBrand = brands.find((b) => b.id === Number(id));
      if (existingBrand) {
        setBrand(existingBrand);
        setMyBrand(existingBrand.myBrand);
        setMyHolder(existingBrand.myHolder);
        setMyState(existingBrand.myState);
      }
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand) return;
    await updateBrand(brand.id, { ...brand, myBrand, myHolder, myState });
    router.push("/");
  };

  return (
    <div>
      <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5">
        <button className="text-lg text-gray-600">
        <i className="ri-menu-line"></i>
        </button>
        <ul className="flex items-center text-sm ml-4">
          <li className="mr-2">
            <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">Servicios</a>
          </li>
          <li className="text-gray-600 mr-2 font-medium">/</li>
          <li className="text-gray-600 mr-2 font-medium">Registro de Marcas</li>
          <li className="text-gray-600 mr-2 font-medium">/</li>
          <li className="text-gray-600 mr-2 font-medium">Editar nuevo registro</li>
        </ul>
        <ul className="ml-auto flex items-center">
          <li className="mr-1">
            <button className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600">
              <i className="ri-search-line"></i>
            </button>
          </li>
          <li className="mr-1">
            <button className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600">
              <i className="ri-notification-3-line"></i>
            </button>
          </li>
          <li>
            <button className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600">
              <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
            </button>
          </li>
        </ul>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white border border-gray-100 p-6 shadow-md shadow-black/10 rounded-md">
            <div className="flex justify-between mb-4 items-center">
              <div className="font-medium">Editar nuevo registro</div>
            </div>
            <div className="overflow-x-auto">
              {brand && (
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="flex justify-between items-center gap-20 mb-5">
                    <label className="text-[12px] uppercase tracking-wide font-medium text-gray-400 text-left w-full">
                      Marca
                      <input
                        className="border rounded mt-2 w-full h-8 text-[14px] pl-3"
                        type="text"
                        value={myBrand}
                        onChange={(e) => setMyBrand(e.target.value)}
                        required
                      />
                    </label>
                    <label className="text-[12px] uppercase tracking-wide font-medium text-gray-400 text-left w-full">
                      Titular
                      <input
                        className="border rounded mt-2 w-full h-8 text-[14px] pl-3"
                        value={myHolder}
                        onChange={(e) => setMyHolder(e.target.value)}
                        required
                      />
                    </label>
                    <label className="text-[12px] uppercase tracking-wide font-medium text-gray-400 text-left w-full">
                      Estado
                      <input
                        className="border rounded mt-2 w-full h-8 text-[14px] pl-3"
                        value={myState}
                        onChange={(e) => setMyState(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="bg-red-500 hover:bg-red-700 text-sm font-medium text-white py-2 px-4 rounded mr-2">
                      <i className="ri-delete-bin-2-line mr-2"></i>Cancelar
                    </button>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-sm font-medium text-white py-2 px-4 rounded">
                      <i className="ri-save-3-line mr-2"></i>Guardar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}