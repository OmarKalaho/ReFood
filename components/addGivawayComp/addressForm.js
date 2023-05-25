import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MapModal from "./mapModal";
import { getAddressFromLatLong } from "../../util/geocode.js";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import mapInput from "../mapComp/mapInput";

export default function AddressForm({onNextClick,address}) {
  const [add, setAdd] = React.useState("");
  const [fields, setFields] = React.useState({ addressName: "", address: "", floor: "", premise: "", area: "", city: "", state: "", country: "" });
  const [latLng,setLatlng] = React.useState(null);
  const [error, setError] = React.useState({ add: false, address: false,addressName:false});
  

  const handleSaveLocationClick = async (latLng) => {
    const response = await getAddressFromLatLong(latLng);
    setLatlng({ lat: latLng.lat(), lng: latLng.lng() });
    setFields({...fields ,...response });

  }


  // function to validate inputs are set
  const validateInputs = () => {
    let errorBool = false
    let error = { add: false, address: false,addressName:false}

    if(add ==""){
      error.add = true;
      errorBool = true;
    }

    if (fields.addressName == "") {
      error.addressName = true;
      errorBool = true;
    }

    if (fields.address == "" || fields.address == "Please try again!") {
      error.address = true;
      errorBool = true;
    }

    if (errorBool) {
      setError(error);
    }
    return errorBool;

  }

  const handleNextClick = () => {
    let error = validateInputs();
    if (error) {
      return;
    }
    onNextClick({PickupLocation:{...fields,latLng}});
  }

  React.useEffect(() => {
    console.log(address);
    if (address) {
      setAdd(address.addressName);
      setFields(address);
      setLatlng(address.latLng);
    } 
  }, []);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}  >
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Select Address
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="add"
              value={add}
              label="Select Address"
              onChange={event => { setAdd(event.target.value); }}
              error={error.add}
            >
              <MenuItem value={"New Address"}>New Address</MenuItem>
              <MenuItem value={"New"}>Address 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {add !==""  &&
          <>
            <Grid item xs={6}>
              <TextField
                required
                id="addressName"
                name="addressName"
                label="Address Name eg. Home, Office, etc."
                value={fields.addressName}
                onChange={e => setFields({ ...fields, addressName: e.target.value })}
                variant="standard"
                error={error.addressName}
                fullWidth />
            </Grid>


            <Grid item xs={12} >
              <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <TextField
                  required
                  error={error.address}
                  value={fields.address}
                  id="address1"
                  name="address1"
                  label="Address Line"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <MapModal onSave={handleSaveLocationClick} ></MapModal>
              </Box>
            </Grid>

          </>
        }
        {fields.address != "" && fields.address != "Please try again!" &&
          <>
            <Grid item xs={6} sm={4}>
              <TextField
                id="floor"
                value={fields.floor}
                name="floor"
                label="Floor No."
                fullWidth
                onChange={e => setFields({ ...fields, floor: e.target.value })}
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <TextField
                required
                id="premise"
                value={fields.premise}
                name="premise"
                label="Building/Apartment No."
                fullWidth
                onChange={e => setFields({ ...fields, premise: e.target.value })}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                required
                id="area"
                value={fields.area}
                name="area"
                label="Neighborhood/Area"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <TextField
                required
                id="city"
                value={fields.city}
                name="city"
                label="City"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                id="state"
                name="state"
                fullWidth
                label="State/Province/Region"
                value={fields.state}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                required
                id="country"
                value={fields.country}
                name="country"
                label="Country"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </>
        }

        <Box sx={{ position: "absolute", bottom: "10%", right: "7%" }}>
          <Button
            variant="contained"
            onClick={handleNextClick}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
