"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import dynamic from "next/dynamic";

const LoadingFallback = () => (
  <div className="flex h-full items-center justify-center p-8">
    <p className="text-brand-text/50">Cargando...</p>
  </div>
);

// ⚡ Bolt: Lazy load view components to reduce initial JavaScript bundle size and improve TTI
const ResumenEjecutivo = dynamic(() => import("@/components/views/ResumenEjecutivo"), { loading: LoadingFallback });
const AnalisisCanales = dynamic(() => import("@/components/views/AnalisisCanales"), { loading: LoadingFallback });
const AnalisisTematico = dynamic(() => import("@/components/views/AnalisisTematico"), { loading: LoadingFallback });
const ClientesRecurrentes = dynamic(() => import("@/components/views/ClientesRecurrentes"), { loading: LoadingFallback });
const ClasificadorVivo = dynamic(() => import("@/components/views/ClasificadorVivo"), { loading: LoadingFallback });
const Prediccion = dynamic(() => import("@/components/views/Prediccion"), { loading: LoadingFallback });

export type View = "resumen" | "canales" | "tematico" | "recurrentes" | "clasificador" | "prediccion";

const viewLabels: Record<View, string> = {
  resumen:       "Resumen Ejecutivo",
  canales:       "Análisis por Canal",
  tematico:      "Análisis Temático",
  recurrentes:   "Clientes Recurrentes",
  clasificador:  "Clasificador en Vivo",
  prediccion:    "Predicción & Dinámica",
};

export default function Home() {
  const [activeView, setActiveView] = useState<View>("resumen");

  const renderView = () => {
    switch (activeView) {
      case "resumen":      return <ResumenEjecutivo />;
      case "canales":      return <AnalisisCanales />;
      case "tematico":     return <AnalisisTematico />;
      case "recurrentes":  return <ClientesRecurrentes />;
      case "clasificador": return <ClasificadorVivo />;
      case "prediccion":   return <Prediccion />;
      default:             return <ResumenEjecutivo />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-brand-surface">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* Main area pushed right of fixed sidebar */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        <TopBar label={viewLabels[activeView]} />
        <main className="flex-1 overflow-y-auto animate-page-in">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
