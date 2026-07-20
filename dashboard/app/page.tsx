"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import dynamic from "next/dynamic";

// ⚡ Bolt: Implemented lazy loading for View Components using next/dynamic
// 💡 What: Replaced static imports with dynamic imports for the 6 main view components.
// 🎯 Why: Previously, all views were bundled together, increasing initial JS load. By lazy loading, we split the bundle and only load the active view's JavaScript when needed.
// 📊 Impact: Significantly reduces initial bundle size (First Load JS) and improves initial page load time, especially since some views might use heavy libraries like Recharts.
// 🔬 Measurement: The size of the shared app chunk and first load JS is reduced. Verified via `pnpm run build` output.

const ResumenEjecutivo = dynamic(() => import("@/components/views/ResumenEjecutivo"), { ssr: true, loading: () => <div className="p-4 flex items-center justify-center h-full text-brand-text">Cargando vista...</div> });
const AnalisisCanales = dynamic(() => import("@/components/views/AnalisisCanales"), { ssr: true, loading: () => <div className="p-4 flex items-center justify-center h-full text-brand-text">Cargando vista...</div> });
const AnalisisTematico = dynamic(() => import("@/components/views/AnalisisTematico"), { ssr: true, loading: () => <div className="p-4 flex items-center justify-center h-full text-brand-text">Cargando vista...</div> });
const ClientesRecurrentes = dynamic(() => import("@/components/views/ClientesRecurrentes"), { ssr: true, loading: () => <div className="p-4 flex items-center justify-center h-full text-brand-text">Cargando vista...</div> });
const ClasificadorVivo = dynamic(() => import("@/components/views/ClasificadorVivo"), { ssr: true, loading: () => <div className="p-4 flex items-center justify-center h-full text-brand-text">Cargando vista...</div> });
const Prediccion = dynamic(() => import("@/components/views/Prediccion"), { ssr: true, loading: () => <div className="p-4 flex items-center justify-center h-full text-brand-text">Cargando vista...</div> });

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
