"use client";

import { useEffect, useRef, type MutableRefObject } from "react";

import dynamic from "next/dynamic";

import "leaflet/dist/leaflet.css";
import '../salons-map.css';
import L from "leaflet";
import { useMap } from "react-leaflet";

import type { Salon } from "../types/salon";

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });

const icon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface Props {
  salons: Salon[];
  selectedSalon: Salon | null;
  onBoundsChange: (bounds: L.LatLngBounds) => void;
  onMarkerClick: (salon: Salon) => void;
}

interface MapEventsProps {
  selectedSalon: Salon | null;
  mapRef: MutableRefObject<L.Map | null>;
  onBoundsChange: (bounds: L.LatLngBounds) => void;
}

function MapEvents({ selectedSalon, mapRef, onBoundsChange }: MapEventsProps) {
  const map = useMap();

  useEffect(() => {
    mapRef.current = map;

    const handleMove = () => {
      onBoundsChange(map.getBounds());
    };

    map.on("moveend", handleMove);
    onBoundsChange(map.getBounds());

    return () => {
      map.off("moveend", handleMove);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useEffect(() => {
    if (selectedSalon && mapRef.current) {
      mapRef.current.setView([selectedSalon.lat, selectedSalon.lng], 16);
    }
  }, [selectedSalon, mapRef]);

  return null;
}

export default function MapView({ salons, selectedSalon, onBoundsChange, onMarkerClick }: Props) {
  const mapRef = useRef<L.Map | null>(null);

  return (
    <MapContainer
      center={[12.9957919, 77.6915302]}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {salons.map((salon) => (
        <Marker
          key={salon.id}
          position={[salon.lat, salon.lng]}
          icon={icon}
          eventHandlers={{
            click: () => onMarkerClick(salon)
          }}
        />
      ))}

      <MapEvents selectedSalon={selectedSalon} mapRef={mapRef} onBoundsChange={onBoundsChange} />
    </MapContainer>
  );
}
