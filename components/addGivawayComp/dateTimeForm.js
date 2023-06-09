import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BackNextButtons from "./backandNextButton";



export default function BasicDateTimePicker({onNextClick,pickupTime}) {
  const [value, setValue] = React.useState(new dayjs());
  React.useEffect(() => { 
    if(pickupTime){
      setValue(dayjs(pickupTime))
    }
  },[]);
  return (
    <>
      <Typography variant="h6" sx={{marginBottom:"25px"}}>
        Pickup Time
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
      <BackNextButtons onNextClick={(button)=>onNextClick(button,{PickupTime:value.toString()})} />
      
    </>
  );
}
