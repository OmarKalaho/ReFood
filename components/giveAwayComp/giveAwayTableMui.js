import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import EnhancedTableHead from "../tableComp/tableHead";
import EnhancedTableToolbar from "../tableComp/tableToolbar";
import TableDetails from "../tableComp/tableDetails";
import Dot from "../giveAwayComp/dot";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // '&:nth-of-type(4n+1)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "foodStatus",
    numeric: false,
    disablePadding: false,
    label: "FoodStatus",
  },

  {
    id: "acceptanceStatus",
    numeric: false,
    disablePadding: false,
    label: "AcceptanceStatus",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
];

export default function EnhancedTable({ rows }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("date");
  const [selected, setSelected] = React.useState([]);
  const [open, setOpen] = React.useState();
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, date) => {
    const selectedIndex = selected.indexOf(date);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, date);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleClick1 = (event, date) => {


    if (open === date) {
      setOpen();
    } else {
      setOpen(date);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (date) => selected.indexOf(date) !== -1;

  const isOpen = (date) => date === open;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100%", mb: 1 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              // sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                headCells={headCells}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row._id);
                    const labelId = `enhanced-table-checkbox-${row._id}`;
                    const open = isOpen(row._id);
                    return (
                      <React.Fragment>
                        <StyledTableRow
                          hover
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row._id}
                          selected={isItemSelected}

                        >
                          <StyledTableCell padding="checkbox">
                            <Checkbox
                              onClick={(event) => handleClick(event, row._id)}
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </StyledTableCell>

                          <StyledTableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                          >
                            {row.createdAt.substring(0, row.createdAt.indexOf('T'))}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.FoodStatus}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Dot color={row.AcceptanceStatus} size={12} /> {row.AcceptanceStatus}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.FoodStatus == "Edible" ? row.FoodQuantity.EdibleFood.quantity + " " + row.FoodQuantity.EdibleFood.unit : row.FoodQuantity.InedibleFood.quantity + " " + row.FoodQuantity.InedibleFood.unit}
                          </StyledTableCell>
                          <StyledTableCell>
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={(event) => {
                                handleClick1(event, row._id);
                              }}
                            >
                              {open ? (
                                <KeyboardArrowUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )}
                            </IconButton>
                          </StyledTableCell>
                        </StyledTableRow>
                        <TableRow>
                          <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={4}
                          >
                            <Collapse in={open} timeout="auto" unmountOnExit>
                              <TableDetails details={row.AcceptanceDetails} />
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  })}
                {emptyRows > 0 && (
                  <StyledTableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <StyledTableCell colSpan={6} />
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{}}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </React.Fragment>
  );
}
