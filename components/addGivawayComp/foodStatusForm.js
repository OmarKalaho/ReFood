import BoxButton from "../boxButtonComp/boxButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function FoodStatusForm({ onNextClick }) {
  const payload = { FoodStatus: "" };

  const HandleButtonClick = (id) => {

    switch (id) {
      case 1:
        payload.FoodStatus = "Edible"
        break;
      case 2:
        payload.FoodStatus = "Inedible"
        break;

      case 3:
        payload.FoodStatus = "Edible and Inedible"
        break;

    }

    onNextClick(payload);



  }


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Food Status
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <BoxButton title="Edible Food" orient="right" onClick={() => HandleButtonClick(1)}>
            {" "}
            For food that is in good shape and should preferably go to a food
            charity to help the needy.{" "}
          </BoxButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BoxButton title="Inedible Food" orient="left" onClick={() => HandleButtonClick(2)}>
            {" "}
            For food that is not really good shape and should preferably go to a food
            recycling factory.{" "}
          </BoxButton>
        </Grid>

        <Button
          onClick={() => HandleButtonClick(3)}
          variant="contained"
          sx={{ margin: 'auto', mt: 4, width: '50%', boxShadow: 6 }}
        >
          Edible & Inedible Food
        </Button>

      </Grid>
    </>
  );
}
