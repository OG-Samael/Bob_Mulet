"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import salonsData from "./data/salon.json";
import type { Salon } from "./types/salon";
import { useMapSync } from "./hooks/useMapSync";
import SalonList from "./components/SalonList";
import SearchBar from "./components/SearchBar";
import './salons-map.css';

const MapView = dynamic(() => import("./components/MapView"), { ssr: false });

export default function SalonsMapPage() {
  const salons: Salon[] = salonsData;

  const { visibleSalons, selectedSalon, updateVisibleSalons, selectSalon } =
    useMapSync(salons);

  const [search, setSearch] = useState("");

  const filteredSalons = visibleSalons.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='salonsMapLayout'>
      {/* Sidebar */}
      <div className='salonsMapSidebar'>
        <SearchBar value={search} onChange={setSearch} />
        <SalonList
          salons={filteredSalons}
          selectedSalon={selectedSalon}
          onSelect={selectSalon}
        />
      </div>

      {/* Map */}
      <div className='salonsMapMain'>
        <MapView
          salons={salons}
          selectedSalon={selectedSalon}
          onBoundsChange={updateVisibleSalons}
          onMarkerClick={selectSalon}
        />
      </div>
    </div>
  );
}
