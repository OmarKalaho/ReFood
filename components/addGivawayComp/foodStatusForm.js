import BoxButton from "../boxButtonComp/boxButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function FoodStatusForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Food Status
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <BoxButton title="Edible Food" orient="right">
            {" "}
            For food that is in good shape and should preferably go to a food
            charity to help the needy.{" "}
          </BoxButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BoxButton title=" Non Edible Food" orient="left">
            {" "}
            For food that is not really good shape and should preferably go to a food
        recycling factory.{" "}
          </BoxButton>
        </Grid>
      </Grid>
    </>
  );
}
