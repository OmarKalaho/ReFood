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
import Button from "@mui/material/Button";

const initializeValues = (foodStatuse)=>{
if(foodStatuse==="Edible"){
  return {
    quantity1: { type: "number", valid: true, value: "" },
    unit1: { type: "text", valid: true, value: "" },
   
  }
}
  if(foodStatuse==="Non-Edible"){
    return {
      quantity1: { type: "number", valid: true, value: "" },
      unit1: { type: "text", valid: true, value: "" },
     
    }
  }
    return {
      quantity1: { type: "number", valid: true, value: "" },
      unit1: { type: "text", valid: true, value: "" },
      quantity2: { type: "number", valid: true, value: "" },
      unit2: { type: "text", valid: true, value: "" },
    }
  }




// const initialValues = {
//   quantity1: { type: "number", valid: true, value: "" },
//   unit1: { type: "text", valid: true, value: "" },
//   quantity2: { type: "number", valid: true, value: "" },
//   unit2: { type: "text", valid: true, value: "" },

// };
//function to validate input is a number
function isNumber(value) {
  return !isNaN(value);
}

export default function QuantityForm({ FoodStatus,onNextClick }) {

  const [values, setValues] = React.useState(initializeValues(FoodStatus));

  const handleValidation = () => {
    const values1 = { ...values }
    let validity;
    for (const value in values1) {
      if (values1[value].type === "number") {
        if (!isNumber(values1[value].value)) {
          values1[value]["valid"] = false;
          validity = "Invalid"

        }
      }
       
      if (values1[value].value === "") {
          values1[value]["valid"] = false;
          validity = "Invalid"
        

      }
    }
    if(validity=="Invalid"){
      setValues(values1);
      console.log(values)
    }
    else{
      onNextClick(values)
    }
  }
  const handleSubmit = () => {
    
    if (handleValidation()) {
      setValid("Valid");
    } else {
      setValid("Invalid");
    }
  }
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: { ...values[name], value: value }
    });
  };

  return (
    <React.Fragment>
      {(FoodStatus === "Both" ||
        FoodStatus === "Edible"
      ) && (
          <>
            <Typography variant="h6" gutterBottom>
              Edible Food Quantiy
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <TextField
                sx={{ flex: "0 2 200px" }}
                required
                id="Quantiy1"
                error={!values["quantity1"]["valid"]}
                label="Quantity"
                type="number"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                name="quantity1"
                value={values["quantity1"]["value"]}
                onChange={handleInputChange}
              />

              <FormControl variant="standard" sx={{ flex: "0 1 100px" }}>
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                 error={!values["unit1"]["valid"]}

                  value={values["unit1"]["value"]}
                  label="Unit"
                  onChange={handleInputChange}
                  name="unit1"
                >
                  <MenuItem value={"KG"}>KG</MenuItem>
                  <MenuItem value={"Meals"}>Meals</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </>
        )}

      {(FoodStatus === "Both" ||
        FoodStatus === "NonEdible"
      ) && (
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
                name="quantity2"
                error={!values["quantity2"]["valid"]}

                value={values["quantity2"]["value"]}
                onChange={handleInputChange}
              />

              <FormControl variant="standard" sx={{ flex: "0 1 100px" }}>
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="unit2"
                error={!values["unit2"]["valid"]}

                  value={values["unit2"]["value"]}
                  label="Unit"
                  onChange={handleInputChange}
                  name="unit2"
                >
                  <MenuItem value={"KG"}>KG</MenuItem>
                  <MenuItem value={"Meals"}>Meals</MenuItem>
                </Select>
              </FormControl>
             

            </Box>
          </>
        )}
         <Box sx={{ position: "absolute", bottom: "10%", right: "7%" }}>
                <Button
                  variant="contained"
                  onClick={handleValidation}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              </Box>
    </React.Fragment>
  );
}
