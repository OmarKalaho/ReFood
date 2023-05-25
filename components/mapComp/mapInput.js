import { GoogleMap, MarkerF, useLoadScript, Data } from "@react-google-maps/api";
import ComboBox from "./comboBox";
import * as React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const libraries = ["places"];

function Map({onClick,markerPosition}) {

  const mapRef = React.useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries
  });

  const center = React.useMemo(() => ({ lat: 33.5138, lng: 36.2734 }), []);
  
  const options = React.useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: false,
      draggableCursor: "crosshair",
      controlSize: 30,
      disableDoubleClickZoom: true,
      zoomControl: false
    }),
    []
  );
  const onLoad = React.useCallback((map) => (mapRef.current = map), []);
  return isLoaded ? (
    <>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={options}
      onLoad={onLoad}
      onClick={onClick}
      >
      <ComboBox/>
    
    <MarkerF  
      position={markerPosition}
      visible={true}
    />
    </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(Map);
