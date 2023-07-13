import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { Chip } from '@mui/material';
const ColorChip = ({percentage}) => {
    let color;
    let icon;
    let text;
    if (percentage > 70) {
        color = 'error'
        icon = (<PublishedWithChangesIcon/>)
        text = "Needs Refill"
    }
    else if (percentage > 40) {
        color = 'warning'
        icon = (<WarningAmberIcon/>)
        text = "Partially Filled"
    }
    else {
        color = 'success'
        icon= (<InfoIcon/>)
        text = "Nearly Empty"
    }

return(
<Chip color={color} icon={icon} label={text} variant="outlined"/>
);

}
export default ColorChip;