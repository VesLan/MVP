import React, { useMemo } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { Box, Typography } from '@mui/material';

const Experience = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:
      'AIzaSyBZ7bqUZaDTk7wp7UWh3JnbA2-55M21z5Q',
  });
  console.log(isLoaded);
  if (!isLoaded) return <Typography>Loading</Typography>;
  return (
    <React.Fragment>
      <Map></Map>
    </React.Fragment>
  );
};

export default Experience;

const containerStyle = {
  width: '500px',
  height: '500px',
};

const center = { lat: 44, lng: -80 };

const Map = () => {
  return (
    <Box
      sx={{
        mt: '5%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={center}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap>
    </Box>
  );
};
