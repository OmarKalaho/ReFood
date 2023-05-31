import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteIcon from "@mui/icons-material/Delete";
import { alpha } from "@mui/material/styles";




export default function EnhancedTableToolbar(props) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
         mb:0,
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.selected
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{  flex: "0 1 fit" }}
            variant="subtitle1"
            component="div"
            color='primary'
          >
            {numSelected} selected
          </Typography>
        ) : (null)}
  
          <Typography
            sx={{ margin:'auto',flex: "1 1 100%" }}
            variant="h5"
            id="tableTitle"
            component="div"
            color='primary'
          >
            My Givaways
          </Typography>
        
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
  
  