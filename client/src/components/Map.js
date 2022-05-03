import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import { Container } from 'semantic-ui-react' 

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = ({ tea }) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(10);
  const [lat, setLat] = useState(35);
  const [zoom, setZoom] = useState(2.5);
  // const [lng, setLng] = useState(tea.origin_longitude);
  // const [lat, setLat] = useState(tea.origin_latitude);
  // const [zoom, setZoom] = useState(2.5);

  console.log(tea)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    new mapboxgl.Marker().setLngLat([tea.origin_longitude, tea.origin_latitude]).addTo(map)
    // new mapboxgl.Marker().setLngLat([35.5760 , 61.86759]).addTo(map) //italy
    // new mapboxgl.Marker().setLngLat([52.5760 , 51.36759]).addTo(map) //egypt

    map.on('move', () => {
      // setLng(map.getCenter().lng.toFixed(4));
      // setLat(map.getCenter().lat.toFixed(4));
      // setZoom(map.getZoom().toFixed(2.5));
      setLng(map.getCenter().lng.toFixed(tea.origin_longitude));
      setLat(map.getCenter().lat.toFixed(tea.origin_latitude));
      setZoom(map.getZoom().toFixed(2.5));
    });

    return () => map.remove();
  }, []); 

  return (
    <div className="map-container">
      {/* <Container > */}
        <div className='map-container' ref={mapContainerRef} />
      {/* </Container> */}
      <br></br>
      <br></br>

      <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
  );
};

export default Map;