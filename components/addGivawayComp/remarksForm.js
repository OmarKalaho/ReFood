import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BackNextButtons from "./backandNextButton";


export default function RemarksForm({onNextClick,extraRemarks}) {
  const [value, setValue] = React.useState("");
  React.useEffect(()=>{
    setValue(extraRemarks)
  },[]);
  return (
    <>
     <Typography variant="h6" sx={{marginBottom:"25px"}}>
       Remarks
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: {sm:"60ch",xs:'35ch'} },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Remarks"
            multiline
            minRows={4}
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
          />
        </div>
      </Box>

      <BackNextButtons onNextClick={(button)=>onNextClick(button,onNextClick({ExtraRemarks:value}))} />

    </>
  );
}
