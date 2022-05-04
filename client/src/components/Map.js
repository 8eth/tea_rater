import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = ({ tea }) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(tea.origin_longitude);
  const [lat, setLat] = useState(tea.origin_latitude);
  const [zoom, setZoom] = useState(2.7);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    new mapboxgl.Marker().setLngLat([tea.origin_longitude, tea.origin_latitude]).addTo(map)

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(3));
      setLat(map.getCenter().lat.toFixed(3));
      setZoom(map.getZoom().toFixed(2.5));
    });

    return () => map.remove();
  }, []); 

  return (
 
    <div className="map-container">
        <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;