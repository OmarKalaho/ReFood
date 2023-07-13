import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

export default function IconMenu({ onClick }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleButtonClick = (e) => {
        onClick(e);
        handleClose();
    }
    return (
        <div>
            <Button
                // sx={{ml:'350px'}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="text"
                startIcon={<TableChartOutlinedIcon />}
                color='info'
            >
                Table View
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <Paper sx={{ width: 320, maxWidth: '100%' }}> */}
                <MenuList >
                    <MenuItem  onClick={()=>handleButtonClick("foodTrashCanTable")} >
                        <ListItemIcon>
                            <TakeoutDiningIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Food Trash Cans</ListItemText>

                    </MenuItem>
                    <MenuItem onClick={()=>handleButtonClick("pendingTable")} >
                        <ListItemIcon>
                            <PendingActionsRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Pending Requests</ListItemText>

                    </MenuItem>
                    <MenuItem onClick={()=>handleButtonClick("acceptedTable")} >
                        <ListItemIcon>
                            <FactCheckOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>My Accepted Requests</ListItemText>

                    </MenuItem>

                </MenuList>
                {/* </Paper> */}
            </Menu>
        </div>
    );
}