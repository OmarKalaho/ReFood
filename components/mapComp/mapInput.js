import { GoogleMap, Marker, useLoadScript, Data } from "@react-google-maps/api";

import * as React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const mapRef = React.useRef();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const center = React.useMemo(() => ({ lat: 33.5138, lng: 36.2734 }), []);
  const options = React.useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      draggableCursor: "crosshair",
      controlSize:30,
      disableDoubleClickZoom:true,
      zoomControl:false
    }),
    []
  );
  const onLoad = React.useCallback((map) => (mapRef.current = map), []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={options}
      onLoad={onLoad}
    >
      <Marker
        icon={"http://maps.google.com/mapfiles/ms/icons/green.png"}
        position={{ lat: 33.2138, lng: 36.17 }}
      ></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
