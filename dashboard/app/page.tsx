"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

// ⚡ Bolt Optimization: Lazily load view components to reduce initial JS bundle size
// Since we use state-based routing instead of file-system routing, all views
// were previously bundled together in the initial load.
const ResumenEjecutivo = dynamic(() => import("@/components/views/ResumenEjecutivo"), {
  loading: () => <div className="p-8 text-center text-brand-neutral/60">Cargando vista...</div>
});
const AnalisisCanales = dynamic(() => import("@/components/views/AnalisisCanales"), {
  loading: () => <div className="p-8 text-center text-brand-neutral/60">Cargando vista...</div>
});
const AnalisisTematico = dynamic(() => import("@/components/views/AnalisisTematico"), {
  loading: () => <div className="p-8 text-center text-brand-neutral/60">Cargando vista...</div>
});
const ClientesRecurrentes = dynamic(() => import("@/components/views/ClientesRecurrentes"), {
  loading: () => <div className="p-8 text-center text-brand-neutral/60">Cargando vista...</div>
});
const ClasificadorVivo = dynamic(() => import("@/components/views/ClasificadorVivo"), {
  loading: () => <div className="p-8 text-center text-brand-neutral/60">Cargando vista...</div>
});
const Prediccion = dynamic(() => import("@/components/views/Prediccion"), {
  loading: () => <div className="p-8 text-center text-brand-neutral/60">Cargando vista...</div>
});

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
