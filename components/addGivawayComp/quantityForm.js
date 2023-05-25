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
import { isGreaterThanZero, isEmpty, isNumber } from "../../util/validation";

const initFoodQuantity = {
  EdibleFood: {
    quantity: "",
    unit: ""
  },
  InedibleFood: {
    quantity: "",
    unit: ""

  }
};
const initError = {
  EdibleFood: {
    quantity: true,
    unit: true
  },
  InedibleFood: {
    quantity: true,
    unit: true

  }
};


export default function QuantityForm({ FoodStatus, foodQuantity, onNextClick }) {

  const [FoodQuantity, setFoodQuantity] = React.useState(initFoodQuantity);
  const [errorFoodQuantity, setErrorFoodQuantity] = React.useState(initError)

  React.useEffect(() => {
    if (foodQuantity) {
      if (FoodStatus === "Edible") {
        foodQuantity = { EdibleFood: { ...foodQuantity.EdibleFood },InedibleFood:{quantity:"",unit:""} }
      }
      if (FoodStatus === "Inedible") {
        foodQuantity = { InedibleFood: { ...foodQuantity.InedibleFood },EdibleFood:{quantity:"",unit:"" }}
      }
      setFoodQuantity(foodQuantity)
    }
  }, []);

  const handleValidation = () => {
    let foodQuantity = { ...FoodQuantity };
    const error = {...errorFoodQuantity};
    let validity;
    if (FoodStatus === "Edible") {
      foodQuantity = { EdibleFood: { ...FoodQuantity.EdibleFood } }
    }
    if (FoodStatus === "Inedible") {
      foodQuantity = { InedibleFood: { ...FoodQuantity.InedibleFood } }
    }
    for (let foodStatus in foodQuantity) {

      error[foodStatus]['quantity'] = true;
      error[foodStatus]['unit'] = true;

      if (!isNumber(foodQuantity[foodStatus]['quantity']) ||
        !isGreaterThanZero(foodQuantity[foodStatus]['quantity']) ||
        isEmpty(foodQuantity[foodStatus]['quantity'])) {
        error[foodStatus]['quantity'] = false;
        validity = "Invalid"
      }

      if (isEmpty(foodQuantity[foodStatus]['unit'])) {
        error[foodStatus]['unit'] = false;
        validity = "Invalid"
      }
    }

    if (validity == "Invalid") {
      setErrorFoodQuantity(error);
      return false;
    }
    return true;

  }
  const handleNextClick = () => {
    if (handleValidation()) {
      onNextClick({ FoodQuantity });
    }

  }


  const Inputs = (foodStatus) => {

    return (
      <>
        <TextField
          sx={{ flex: "0 2 200px" }}
          id={`${foodStatus}Quantiy`}
          key={`${foodStatus}Quantiy`}
          error={!errorFoodQuantity[foodStatus]["quantity"]}
          label="Quantity"
          type="number"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
          name={`${foodStatus} Quantiy`}
          value={FoodQuantity[foodStatus]["quantity"]}
          onChange={(e) => setFoodQuantity({
            ...FoodQuantity,
            [foodStatus]: { ...FoodQuantity[foodStatus], quantity: e.target.value }
          })
          } />

        <FormControl variant="standard" sx={{ flex: "0 1 100px" }}>
          <InputLabel id={`${foodStatus} unit demo-simple-select-label`}>Unit</InputLabel>
          <Select
            labelId={`${foodStatus} unit`}
            id={`${foodStatus} unit`}
            error={!errorFoodQuantity[foodStatus]["unit"]}
            value={FoodQuantity[foodStatus]["unit"]}
            label="Unit"
            onChange={(e) => setFoodQuantity({
              ...FoodQuantity,
              [foodStatus]: { ...FoodQuantity[foodStatus], unit: e.target.value }
            })
            }
            name={`${foodStatus} unit`}
          >
            <MenuItem value={"KG"}>KG</MenuItem>
            <MenuItem value={"Meals"}>Meals</MenuItem>
          </Select>
        </FormControl>
      </>

    );
  }


  return (
    <React.Fragment>
      {(FoodStatus === "Edible and Inedible" ||
        FoodStatus === "Edible"
      ) && (
          <>
            <Typography variant="h6" gutterBottom>
              Edible Food Quantiy
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {Inputs("EdibleFood")}
            </Box>
          </>
        )}

      {(FoodStatus === "Edible and Inedible" ||
        FoodStatus === "Inedible"
      ) && (
          <>
            <Typography variant="h6" gutterBottom sx={{ marginTop: "50px" }}>
              Non Edible Food Quantiy
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {Inputs("InedibleFood")}
            </Box>
          </>
        )}
      <Box sx={{ position: "absolute", bottom: "10%", right: "7%" }}>
        <Button
          variant="contained"
          onClick={handleNextClick}
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}
