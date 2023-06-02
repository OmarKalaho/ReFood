import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";

const Buttons = ({ id,onAClick }) => {
    return (
      <ButtonGroup
        disableElevation
        variant="text"
        aria-label="Disabled elevation buttons"
        orientation="vertical"
        size="small"
      >
        <Button id ={id} onClick={(e)=>{onAClick(e); console.log(e)}}>Accept</Button>
        <Button color={"warning"}>Reject</Button>
      </ButtonGroup>);
  };

  export default Buttons;