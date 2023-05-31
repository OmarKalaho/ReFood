import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Button,Box } from '@mui/material';


export default function Review({ reviewData,onConfirmClick,onBackClick }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Giveaway summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary="Food Status" secondary=" " />
          <Typography variant="body2"> {reviewData.FoodStatus}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText color="primary" primary="Edible Food Quantity" secondary={reviewData.FoodQuantity.EdibleFood.unit} />
          <Typography variant="body2"> {reviewData.FoodQuantity.EdibleFood.quantity}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText color="primary" primary="Inedible Food Quantity" secondary={reviewData.FoodQuantity.InedibleFood.unit} />
          <Typography variant="body2"> {reviewData.FoodQuantity.InedibleFood.quantity ? reviewData.FoodQuantity.InedibleFood.quantity : 0}</Typography>
        </ListItem>
        {/* <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Address" secondary={reviewData.PickupLocation.addressName}/>
            <Typography variant="body2"> {reviewData.PickupLocation.address}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Time" />
            <Typography variant="body2"> {reviewData.PickupTime}</Typography>
          </ListItem> */}

      </List>
      <Divider variant="" sx={{ mt:1,mb:1 }} />
      <Grid container spacing={2} >
        <Grid item xs={12} sm={8}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt:0 }}>
            Time & Location
          </Typography> */}
          <Typography variant="caption" gutterBottom >Time</Typography>
          <Typography variant="body2" gutterBottom >{reviewData.PickupTime}</Typography>

          <Typography variant="caption" gutterBottom >{`Location ( ${reviewData.PickupLocation.addressName} )`}</Typography>
          <Typography gutterBottom variant="body2" >{reviewData.PickupLocation.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4}>
          <Typography variant="caption" gutterBottom sx={{ mt: 0 }}>
            Remarks
          </Typography>
          <Typography variant="body2" gutterBottom>{reviewData.ExtraRemarks}</Typography>
        </Grid>
      </Grid>


    <Box sx={{ display: 'flex', justifyContent: 'space-between',width:"96%",position: "absolute", bottom: "1%",p:1}}>
            <Button
            name="Back"
            onClick={onBackClick} 
            >
                Back
            </Button>
            <Button
            name="Next"
                variant="contained"
                onClick={onConfirmClick}
            >
                Confirm
            </Button>

        </Box>
    </React.Fragment>
  );
}