import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Map from '../mapComp/mapInput';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import ComboBox from "../mapComp/comboBox2";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ onSave }) {
  const [open, setOpen] = React.useState(false);
  const [markerPosition, setMarkerPosition] = React.useState();

  const handleClick = (e) => {
    setMarkerPosition(e.latLng );
    }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    onSave(markerPosition);
    handleClose();
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        
        <AddLocationAltOutlinedIcon/>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: 'black',}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Please click on your location precisly
            </Typography>
            <Button autoFocus color="inherit" onClick={handleOk}>
              OK
            </Button>
          </Toolbar>
        </AppBar>
       
         <Map onClick={handleClick} markerPosition={markerPosition} /> 

      </Dialog>
    </>
  );
}