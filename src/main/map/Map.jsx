import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.scss"

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const point = { lng: 5.89782, lat: 49.52704 };
  const [zoom] = useState(15.5);
  maptilersdk.config.apiKey = 'CkO8aZeUYHNZgUtHESYD';

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.HYBRID,
      center: [point.lng, point.lat],
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([point.lng, point.lat])
      .addTo(map.current);
  }, [point.lng, point.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}