import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Map from "../mapComp/mapInput";

export default function MapModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Set location on map</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Container
          component="main"
          maxWidth="md"
          sx={{ position: "absolute", top: "20%", left: "35%" }}
        >
          <Paper
            variant="standard"
            sx={{
              backgroundColor: "rgba(0,0,0,0.3)",
              height: "fit-content",
              width: "8%",
              marginY: "0vh",
            }}
          >
            <Box>
              <Box width="40vw" height="50vh">
                {" "}
                <Map />{" "}
              </Box>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Paper>
        </Container>
      </Modal>
    </React.Fragment>
  );
}
