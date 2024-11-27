import React from "react";
import "./globals.css";

export const metadata = {
  title: "Gestión de Registros de Marca",
  description: "CRUD básico utilizando Next.js y TypeScript.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es">
    <body>
      <header className="header">
        <h1>Gestión de Registros</h1>
      </header>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;