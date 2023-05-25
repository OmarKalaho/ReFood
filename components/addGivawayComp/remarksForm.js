import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
          "& .MuiTextField-root": { m: 1, width: "60ch" },
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


      <Box sx={{ position: "absolute", bottom: "10%", right: "7%" }}>
          <Button
            variant="contained"
            onClick={() =>{onNextClick({ExtraRemarks:value})}}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Box>

    </>
  );
}
