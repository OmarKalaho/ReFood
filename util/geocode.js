import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("sy");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.


// Get address from latitude & longitude.
export const getAddressFromLatLong = async (latLng) => {
  try {
    const response = await Geocode.fromLatLng(latLng.lat().toString(), latLng.lng().toString());
    const address = response.results[0].formatted_address;
    const addressComponents = response.results[0].address_components
    console.log(response);
    let premise=""; let street=""; let area=""; let city=""; let state=""; let country="";;
    
    for (let i = 0; i < addressComponents.length; i++) {
      for (let j = 0; j < addressComponents[i].types.length; j++) {
        switch (addressComponents[i].types[j]) {
          case ("premise"):
            premise = addressComponents[i].long_name;
            break;

          case ("route"):
            street = addressComponents[i].long_name;
            break;

          case ("sublocality_level_1"):
            area = addressComponents[i].long_name;
            break;

          case "locality":
            city = addressComponents[i].long_name;
            if (area === "") {
              area = addressComponents[i].long_name;
            }
            break;

          case ("administrative_area_level_2"):
            if (city === ""|| city!==addressComponents[i].long_name) {
              city = addressComponents[i].long_name;
            }
            break;

          case "administrative_area_level_1":
            state = addressComponents[i].long_name;
            break;

          case "country":
            country = addressComponents[i].long_name;
            break;
        }
      }
    }
    return { address, premise, street, area, city, state, country };
  }
  catch {
    return { address: "Please try again!", premise: "Please try again!", area: "Please try again!", city: "Please try again!", state: "Please try again!", country: "please try again" }
  }
}


// // Get formatted address, city, state, country from latitude & longitude when
// // Geocode.setLocationType("ROOFTOP") enabled
// // the below parser will work for most of the countries
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   (response) => {
//     const address = response.results[0].formatted_address;
//     let city, state, country;
//     for (let i = 0; i < response.results[0].address_components.length; i++) {
//       for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//         switch (response.results[0].address_components[i].types[j]) {
//           case "locality":
//             city = response.results[0].address_components[i].long_name;
//             break;
//           case "administrative_area_level_1":
//             state = response.results[0].address_components[i].long_name;
//             break;
//           case "country":
//             country = response.results[0].address_components[i].long_name;
//             break;
//         }
//       }
//     }
//     console.log(city, state, country);
//     console.log(address);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// // Get latitude & longitude from address.
// Geocode.fromAddress("Eiffel Tower").then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   (error) => {
//     console.error(error);
//   }
// );