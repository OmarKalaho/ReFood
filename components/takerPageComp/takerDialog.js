import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const TakerDialog = ({ handleAcceptClick, handleClose, open }) => {
    const [value,setValue] = React.useState({name:"",number:""});
    return (
        <div>
            <Dialog TransitionComponent={Transition} maxWidth='sm' fullWidth={true} open={open} onClose={handleClose}>
                <DialogTitle> Please Provide Info.</DialogTitle> 
                <DialogContent>
                    {/* <DialogContentText >
                        Please Provide Courier Name and Phone Number.
                    </DialogContentText> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Courier Name"
                        type="text"
                        variant="standard"
                        value={value.name}
                        onChange={(e)=>setValue({...value,name:e.target.value})}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        sx={{ ml:{xs:0,md:'50px'}}}
                        name="number"
                        label="Courier Phone Number"
                        type="text"
                        variant="standard"
                        value={value.number}
                        onChange={(e)=>setValue({...value,number:e.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>{handleAcceptClick(value.name,value.number);handleClose()}}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}
export default TakerDialog;