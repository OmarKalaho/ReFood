import { Box, Button } from '@mui/material';


const BackNextButtons = ({onNextClick}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between',width:"96%",position: "absolute", bottom: "1%",p:1}}>
            <Button
            name="Back"
            onClick={(e)=>onNextClick(e.target.name)} 
            >
                Back
            </Button>
            <Button
            name="Next"
                variant="contained"
            onClick={(e)=>onNextClick(e.target.name)}
            >
                Next
            </Button>

        </Box>
    )
}
export default BackNextButtons;