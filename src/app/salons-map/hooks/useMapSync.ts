"use client";

import { useState, useCallback } from "react";

import type * as L from "leaflet";

import type { Salon } from "../types/salon";

export function useMapSync(salons: Salon[]) {
  const [visibleSalons, setVisibleSalons] = useState<Salon[]>(salons);
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);

  const updateVisibleSalons = useCallback(
    (bounds: L.LatLngBounds) => {
      const filtered = salons.filter((s) =>
        bounds.contains([s.lat, s.lng])
      );

      setVisibleSalons(filtered);
    },
    [salons]
  );

  const selectSalon = useCallback((salon: Salon) => {
    setSelectedSalon(salon);
  }, []);

  return {
    visibleSalons,
    selectedSalon,
    updateVisibleSalons,
    selectSalon
  };
}
