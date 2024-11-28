import React from "react";
import "remixicon/fonts/remixicon.css"
import "./globals.css";

export const metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <body className="text-gray-800">
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
            <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover"/>
            <span className="text-lg font-bold text-white ml-3">Logo</span>
        </a>
        {/* <h1>Gestión de Registros</h1> */}
        <ul className="mt-4">
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
            <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group active">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
              <i className="ri-flashlight-line mr-3 text-lg"></i>
              <span className="text-sm">Servicios</span>
              <i className="ri-arrow-right-s-line ml-auto rotate-90"></i>
            </a>
            <ul className="pl-8 mt-2">
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Registro de marcas</a>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
            <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">Configuración</span>
            </a>
          </li>
        </ul>
      </div>
      <main className="w-[calc(100%-256px)] ml-64 bg-gray-50 min-h-screen">{children}</main>
    </body>
  </html>
);

export default RootLayout;