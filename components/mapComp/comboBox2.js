import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";


import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useGoogleMap } from '@react-google-maps/api'
import Geocode from "react-geocode";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";

export default function ComboBox() {
    const map = useGoogleMap();

    const PanToo = (address) => {
        if (address == null) {
            return
        }
        Geocode.fromAddress(address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                map.panTo({ lat, lng })
                map.setZoom(18)
                
                // map.fitBoundsmap(map.getBounds());
            },
            (error) => {
                console.error(error);
            }
        );
    }
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
       
        requestOptions: {
          /* Define search scope here */
          componentRestrictions: { country: "sy" },

        },
        debounce: 300,
      });

    console.log(data);


    return (
        <Autocomplete
        freeSolo
            disablePortal
            id="combo-box-demo"
            onInputChange={(event, newInputValue) => {
                setValue(newInputValue);
            }}
            onChange={(event, newValue) => {
                setValue(newValue);
                if (newValue != null) {
                    PanToo(newValue);
                }
            }}
            noOptionsText="No locations"
            value={value}
            autoComplete
            includeInputInList
            options={data.map((option) => option.description)}
            sx={{ width: 300, margin: 'auto', marginTop: "45px" }}
            renderInput={(params) => <TextField {...params} label="Search Location" />}
            renderOption={(props, option) => {
                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                                <LocationOnIcon sx={{ color: 'text.secondary' }} />
                            </Grid>
                            <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>

                                <Box
                                    component="span"

                                >
                                    {option}
                                </Box>

                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />

    )


}