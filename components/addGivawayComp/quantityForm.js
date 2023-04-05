import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function QuantityForm({ foodStatus }) {
  const [unit, setUnit] = React.useState("");
  const [unit2, setUnit2] = React.useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };
  const handleChange2 = (event) => {
    setUnit2(event.target.value);
  };
  return (
    <React.Fragment>
      {(foodStatus === "both" ||
        foodStatus === "edible" ||
        foodStatus == null) && (
        <>
          <Typography variant="h6" gutterBottom>
            Edible Food Quantiy
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <TextField
              sx={{ flex: "0 2 200px" }}
              required
              id="Quantiy1"
              label="Quantity"
              type="number"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />

            <FormControl variant="standard" sx={{ flex: "0 1 100px" }}>
              <InputLabel id="demo-simple-select-label">Unit</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unit}
                label="Unit"
                onChange={handleChange}
              >
                <MenuItem value={"KG"}>KG</MenuItem>
                <MenuItem value={"Meals"}>Meals</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>
      )}

      {(foodStatus === "both" ||
        foodStatus === "not edible" ||
        foodStatus == null) && (
        <>
          <Typography variant="h6" gutterBottom sx={{ marginTop: "50px" }}>
            Non Edible Food Quantiy
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <TextField
              sx={{ flex: "0 2 200px" }}
              required
              id="Quantiy2"
              label="Quantity"
              type="number"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />

            <FormControl variant="standard" sx={{ flex: "0 1 100px" }}>
              <InputLabel id="demo-simple-select-label">Unit</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="unit2"
                value={unit2}
                label="Unit"
                onChange={handleChange2}
              >
                <MenuItem value={"KG"}>KG</MenuItem>
                <MenuItem value={"Meals"}>Meals</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>
      )}
    </React.Fragment>
  );
}
