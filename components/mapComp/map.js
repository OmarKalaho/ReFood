import { GoogleMap, useJsApiLoader,Marker, useLoadScript} from '@react-google-maps/api';
import * as React from "react";

const containerStyle = {
  
  width: '100%',
  height: '70%'
};

const center = {
  lat: 33.5138,
  lng: 36.2734,
  
};
const options = {
    disableDefaultUI:true,
    clickableIcons:false,
    
}

function Map() {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBMosONNJ391Kay18RJxkYznbMHN_Qj70k",
    libraries:["places"],
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/green.png"} position={{lat:33.2138,lng:36.17}}></Marker>
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/green.png"} position={{lat:33.3138,lng:36.27}}></Marker>
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/green.png"} position={{lat:33.1138,lng:36.37}}></Marker>
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/green.png"} position={{lat:33.2138,lng:36.47}}></Marker>
        <Marker icon={"http://maps.google.com/mapfiles/ms/icons/green.png"} position={{lat:33.2138,lng:36.77}}></Marker>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)