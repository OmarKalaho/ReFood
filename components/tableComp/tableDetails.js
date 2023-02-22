import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";


export default function TableDetails({details}) {
    return(
<Box sx={{ margin: 1 }}>
  <Typography
    color="white"
    variant="body1"
    gutterBottom
    component="div"
    bgcolor="black"
  >
    Details
  </Typography>
  <Table
    sx={{ bgcolor: (theme) => theme.palette.action.selected }}
    size="small"
    aria-label="purchases"
  >
    <TableHead>
      <TableRow>
        <TableCell>Recipient</TableCell>
        <TableCell>Courier Name</TableCell>
        <TableCell align="right">Courier Number</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      
        <TableRow >
          <TableCell component="th" scope="row">
            {details.organizationName}
          </TableCell>
          <TableCell>{details.courierName}</TableCell>
          <TableCell align="right">{details.courierNumber}</TableCell>
        </TableRow>
      
    </TableBody>
  </Table>
</Box>);
}
