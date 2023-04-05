import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function RemarksForm() {
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
          />
        </div>
      </Box>
    </>
  );
}
