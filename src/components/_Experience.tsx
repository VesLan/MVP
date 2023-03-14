import React from 'react';
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   useJsApiLoader,
//   StreetViewPanorama,
// } from '@react-google-maps/api';
import { Box } from '@mui/material';
import { Loader } from '@googlemaps/js-api-loader';
import { IMapCoordinate } from '../interfaces/IMapCoordinate';

const Experience: React.FC<IMapCoordinate> = ({
  mapCoordinate,
}) => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey:
  //     'AIzaSyBZ7bqUZaDTk7wp7UWh3JnbA2-55M21z5Q',
  // });

  // if (loadError) {
  //   console.log('ERROR');
  //   return <Typography>Error Loading Maps</Typography>;
  // }

  // if (!isLoaded) {
  //   console.log('LOADING');
  //   return <Typography>Loading Maps</Typography>;
  // }
  // console.log({ lat, lng, heading, pitch });
  return (
    <React.Fragment>
      <MapComponent mapCoordinate={mapCoordinate} />
    </React.Fragment>
  );
};

export default Experience;

const containerStyle = {
  width: '600px',
  height: '600px',
};

// const Map = () => {
//   console.log('FINISH LOADING');
//   return (
//     <Box
//       sx={{
//         mt: '5%',
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         zoom={10}
//         center={center}
//       >
//         {/* <Marker
//           position={{ lat: 44, lng: -80 }}
//           options={{
//             visible: true,
//           }}
//         /> */}
//         <StreetViewPanorama
//           options={{
//             position: { lat: 44, lng: -80 },
//             visible: true,
//           }}
//           onLoad={() => console.log('onLoad')}
//           onUnmount={() => console.log('onUnmount')}
//         />
//       </GoogleMap>
//     </Box>
//   );
// };

// USING JS-API-LOADER

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  version: 'beta',
});

const MapComponent: React.FC<IMapCoordinate> = ({
  mapCoordinate,
}) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const streetViewRef =
    React.useRef<google.maps.StreetViewPanorama | null>(
      null,
    );
  const { lat, lng, heading, pitch } = mapCoordinate;

  React.useEffect(() => {
    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current!, {
        center: {
          lat,
          lng,
        },
        zoom: 1,
      });
      // const marker = new google.maps.Marker({
      //   position: { lat: 44, lng: -80 },
      //   map: map,
      // });
      streetViewRef.current = map.getStreetView();
      streetViewRef.current.setPosition({
        lat,
        lng,
      });
      streetViewRef.current.setPov({
        heading,
        pitch,
      });
      streetViewRef.current.setVisible(true);
    });
  }, []);

  return (
    <Box
      sx={{
        m: '2.5%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div ref={mapRef} style={containerStyle}></div>
    </Box>
  );
};
