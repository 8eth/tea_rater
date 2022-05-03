import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import '../Map.css';
import { Container } from 'semantic-ui-react' 

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="map-container">
      <Container >
        {/* <div className='sidebarStyle'>
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div> */}
        <div className='map-container' ref={mapContainerRef} />
      </Container>
    </div>
  );
};

export default Map;


// import React, {useState} from 'react'
// // import ReactMapGL from 'react-map-gl';
// // import maplibregl from 'maplibre-gl';
// // import 'mapbox-gl/dist/mapbox-gl.css';


// function TeaDetailMap() {

//   // const MAPBOX_TOKEN = "pk.eyJ1IjoiZmVrYWR1YmV0aCIsImEiOiJjbDJwNGFiMHIxYnEzM3BwNjM3MzYwdmNwIn0.4CqLkwvko0ij9cpPxpggNg"

//   const [viewState, setViewState] = useState({
//     longitude: -122.4,
//     latitude: 37.8,
//     zoom: 6,
//     width: 600, 
//     height: 400
//   })
  
//   return (
//     <div>
//       {/* <ReactMapGL
//         {...viewState}
//         // onMove={evt => setViewState(evt.viewState)}
//         // mapStyle="mapbox://styles/mapbox/streets-v9"
//         mapboxAccessToken={'pk.eyJ1IjoiZmVrYWR1YmV0aCIsImEiOiJjbDJwNGFiMHIxYnEzM3BwNjM3MzYwdmNwIn0.4CqLkwvko0ij9cpPxpggNg'}
//         // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       />       */}


//     </div>
//   )
// }

// export default TeaDetailMap