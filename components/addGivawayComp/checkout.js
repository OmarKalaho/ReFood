import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuantityForm from "./quantityForm";
import FoodStatusForm from "./foodStatusForm";
import Review from "./review";
import AddressForm from "./addressForm.js";
import DateTimeForm from "./dateTimeForm";
import RemarksForm from "./remarksForm";


const steps = [
  "Food Status",
  "Quantity",
  "Pickup Location",
  "Pickup Time",
  "Extra Remarks",
  "Confirm",
];

let giveAwayData = { FoodStatus: "", FoodQuantity:null, PickupLocation: null, PickupTime: "", ExtraRemarks: "" };

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleTransition = (payload) => {
    giveAwayData = { ...giveAwayData, ...payload }
    handleNext();
    console.log(giveAwayData);
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FoodStatusForm onNextClick={handleTransition} />;
      case 1:
        return <QuantityForm FoodStatus={giveAwayData.FoodStatus} foodQuantity={giveAwayData.FoodQuantity} onNextClick={handleTransition} />;
      case 2:
        return <AddressForm address={giveAwayData.PickupLocation} onNextClick={handleTransition}/>;
      case 3:
        return <DateTimeForm onNextClick={handleTransition} pickupTime={giveAwayData.PickupTime}/>;
      case 4:
        return <RemarksForm onNextClick={handleTransition} extraRemarks={giveAwayData.ExtraRemarks}/>;
      case 5:
        return <Review reviewData={giveAwayData} />;
      default:
        throw new Error("Unknown step");
    }
  }


  return (
    <>
      <CssBaseline />

      <Container component="main" maxWidth="md" sx={{ minHeight: "100vh" }}>
        <Paper
          variant="outlined"
          sx={{ position: "relative", height: "96vh", width: "100%", marginY: "2vh", p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            New GiveAway
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your GiveAway.
              </Typography>
              <Typography variant="subtitle1">
                Success. We have emailed your giveaway confirmation, and will
                send you an update when your givaway will be picked up.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ position: "absolute", bottom: "10%", mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  );
}
