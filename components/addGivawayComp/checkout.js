import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import QuantityForm from "./addressForm";
import PaymentForm from "./paymentForm";
import FoodStatusForm from "./foodStatusForm";
import Review from "./review";

const steps = [
  "Food Status",
  "Quantity",
  "Pickup Location",
  "Pickup Time",
  "Extra Remarks",
  "Confirm",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FoodStatusForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    case 3:
      return <PaymentForm />;
    case 4:
      return <Review />;
    case 5:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />

      <Container component="main" maxWidth="md" sx={{ minHeight: "100vh" }}>
        <Paper
          variant="outlined"
          sx={{ height: "90vh", marginTop: "6vh", p: { xs: 2, md: 3 } }}
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
                Success. We have emailed your giveaway
                confirmation, and will send you an update when your givaway will be
                picked up.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Confirm" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  );
}
