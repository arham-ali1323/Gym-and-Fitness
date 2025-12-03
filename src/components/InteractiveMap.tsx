'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import L from 'leaflet';

// Fix for default marker icons in Next.js
const DefaultIcon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface InteractiveMapProps {
  className?: string;
  center?: [number, number];
  zoom?: number;
  markerText?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  className = '',
  center = [51.505, -0.09], // Default to London
  zoom = 13,
  markerText = 'Our Location'
}) => {
  return (
    <motion.div 
      className={`w-full h-full overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MapContainer 
        center={center} 
        zoom={zoom} 
        className="w-full h-full z-0 rounded-2xl"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup className="text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-primary-500 mb-1" />
              <span className="font-semibold">{markerText}</span>
              <p className="text-sm text-gray-600">123 Fitness Street</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
};

export default InteractiveMap;
