import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationMarker, ItineraryId } from '../data/types';
import { MAP_CONFIGS } from '../data/locations';
import { ExternalLink, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  itineraryId: ItineraryId;
  locations: LocationMarker[];
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ itineraryId, locations }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Remove existing map instance if present
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const config = MAP_CONFIGS[itineraryId];
    const map = L.map(mapContainerRef.current, {
      center: config.center,
      zoom: config.zoom,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    mapInstanceRef.current = map;
    markersRef.current = {};

    // Helper to create custom HTML pin icon
    const createCustomPin = (pinClass: string, emoji: string) => {
      return L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md border-2 border-white transition-transform transform hover:scale-110 cursor-pointer ${
            pinClass === 'pin-emerald' ? 'bg-emerald-600' :
            pinClass === 'pin-amber' ? 'bg-amber-600' :
            pinClass === 'pin-purple' ? 'bg-purple-600' :
            pinClass === 'pin-rose' ? 'bg-rose-600' : 'bg-sky-600'
          }">
            <span class="select-none leading-none">${emoji}</span>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28],
      });
    };

    // Filter relevant locations for this itinerary
    const filtered = itineraryId === 'compare'
      ? locations
      : locations.filter((loc) => loc.itineraries.includes(itineraryId as any));

    // Add markers
    filtered.forEach((loc) => {
      const icon = createCustomPin(loc.pinClass, loc.emoji);
      const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);

      const popupHtml = `
        <div style="font-family: inherit; font-size: 0.875rem; min-width: 220px; padding: 4px;">
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>${loc.emoji}</span>
            <span>${loc.name}</span>
          </div>
          <p style="margin: 4px 0 8px; color: #475569; font-size: 0.8125rem; line-height: 1.4;">
            ${loc.info}
          </p>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 6px;">
            <a href="https://maps.google.com/?q=${loc.lat},${loc.lng}" target="_blank" rel="noopener noreferrer" style="color: #0284c7; font-weight: 600; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 4px; text-decoration: none;">
              <span>Open in Google Maps &rarr;</span>
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);
      markersRef.current[loc.id] = marker;
    });

    // Add polylines
    config.polylines.forEach((line) => {
      L.polyline(line.points, {
        color: line.color,
        weight: line.weight || 4,
        opacity: line.opacity || 0.8,
        dashArray: (line as any).dashArray,
      }).addTo(map);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [itineraryId, locations]);

  const handleChipClick = (id: string, lat: number, lng: number) => {
    setActiveLocationId(id);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([lat, lng], 13, { duration: 1.2 });
      setTimeout(() => {
        const marker = markersRef.current[id];
        if (marker) {
          marker.openPopup();
        }
      }, 1250);
    }
  };

  const filteredLocations = itineraryId === 'compare'
    ? locations
    : locations.filter((loc) => loc.itineraries.includes(itineraryId as any));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      
      {/* Location Chips Quick Navigation */}
      <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          <Navigation className="w-3.5 h-3.5 text-cyan-600" />
          <span>Interactive Location Points (Click to Zoom):</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {filteredLocations.map((loc) => {
            const isActive = activeLocationId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => handleChipClick(loc.id, loc.lat, loc.lng)}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span>{loc.emoji}</span>
                <span>{loc.name.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div ref={mapContainerRef} className="h-[420px] sm:h-[480px] w-full z-10" />

        {/* Floating Google Maps helper badge */}
        <div className="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-[11px] text-slate-600 flex items-center gap-1.5">
          <span>Click any pin to inspect details & open direct driving coordinates</span>
        </div>
      </div>
    </div>
  );
};
