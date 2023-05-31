import {
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

import * as React from "react";

const containerStyle = {
  width: "100%",
  height: "70%",
};


function Map() {
  const mapRef = React.useRef()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const center = React.useMemo(() => ({ lat: 33.5138, lng: 36.2734 }), []);
  const options = React.useMemo( () => ({disableDefaultUI: true, clickableIcons: false,
    }),
    []
  );
const onLoad = React.useCallback(map=>(mapRef.current=map),[]);
const onclick = (e)=>{console.log(e)}
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={options}
      onLoad={onLoad}
      onClick={onclick}
      
    >
      <Marker
        position={{ lat: 33.5138, lng: 36.2734 }}
      ></Marker>
      <Marker
        position={{ lat: 33.3138, lng: 36.27 }}
      ></Marker>
      <Marker
        position={{ lat: 33.1138, lng: 36.37 }}
      ></Marker>
      <Marker
        position={{ lat: 33.2138, lng: 36.47 }}
      ></Marker>
      <Marker
        position={{ lat: 33.2138, lng: 36.77 }}
      ></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
