import {
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

import * as React from "react";

const libraries = ["places"];
const containerStyle = {
  width: "100%",
  height: "80%",
};



function Map({ center }) {
  const mapRef = React.useRef()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  

  // const center = React.useMemo(() => ({ lat: 33.5138, lng: 36.2734 }), []);
  const options = React.useMemo(() => ({
    disableDefaultUI: true, clickableIcons: false,
    mapId: '7ea8b3b4691f9afe'

  }),
    []
  );
  const onLoad = React.useCallback(map => (mapRef.current = map), []);
  const onclick = (e) => { console.log(e) }
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={options}
      onLoad={onLoad}
      onClick={onclick}

    >
      
      <MarkerF
        position={center} 
      ></MarkerF>


    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
