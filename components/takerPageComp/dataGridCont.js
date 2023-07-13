import * as React from "react";
import StyledDataGrid from "./styledDataGrid";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
  GridToolbarQuickFilter,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import ViewMenuButton from "./viewMenuButton";
import Box from '@mui/material/Box';
import LoadBar from "../trashCanTableComp/loadBar";
import ColorChip from "../trashCanTableComp/chip";
import Buttons from "../takerPageComp/acceptDeclineButtons";


dayjs.extend(relativeTime);

const DataGridCont = ({ tableView, handleTableViewChange, dataGridRows,
   handleClickOpen, handleRowClick, trashCanRows }) => {
    console.log(trashCanRows);
  const columns = React.useMemo(
    () => [
      {

        field: "createdAt", headerName: "Time", width: 100,
        valueGetter: ({ row }) => {

          return new dayjs(row.createdAt).from(new dayjs());
        }
      },
      {
        field: "PickupLocation", headerName: "Location", width: 270,
        valueGetter: ({ row }) => {

          return row.PickupLocation.address;
        }
      },
      {
        field: "FoodQuantity", headerName: "Quantity", width: 70,
        type: 'number',
        valueGetter: ({ row }) => {

          return row.FoodQuantity.InedibleFood.quantity || row.FoodQuantity.EdibleFood.quantity;
        }
      },
      {
        field: "FoodUnit", headerName: "Unit", width: 60,
        valueGetter: ({ row }) => {

          return row.FoodQuantity.InedibleFood.unit || row.FoodQuantity.EdibleFood.unit;
        }
      },
      {
        field: "PickupTime", headerName: "Due", width: 110, valueGetter: ({ row }) => {

          return new dayjs(row.PickupTime).from(new dayjs());
        }
      },
      {
        field: "col6", headerName: "Actions", width: 80,
        renderCell: (params) => {
          if (tableView == "pendingTable") { return ((<Buttons onAClick={handleClickOpen} />)) } else if (tableView == "acceptedTable") {
            return <Box sx={{ color: "green", height: "63.5px", paddingTop: '1rem' }}>Accepted</Box>;
          }
        }
      },
      {
        field: "ExtraRemarks", headerName: "Remarks", flex: 1,
        minWidth: 170,
      },
    ], [tableView]);
  const columns2 =
    [
      {
        field: "Number", headerName: "No.", width: 40, 
        valueGetter: ({ row }) => {
          return row.TrashCanNumber;
      },
      renderCell: ({ row }) => {
        return (<Box sx={{color:'green'}}>{row.TrashCanNumber}<DeleteSweepIcon fontSize="10px"/> </Box>);
      }
      },
      {
        field: "col2", headerName: "Filled Quantity", width: 300,
        renderCell: ({ row }) => {
          return ((<LoadBar percentage={row.FillPercentage} />))
        },
        valueGetter: ({ row }) => {
          return row.FillPercentage;
      },
      },
      {
        field: "col4", headerName: "Status", width: 180,
        renderCell: ({ row }) => {
          return ((<ColorChip percentage={row.FillPercentage} />))
        }
      },
      {
        field: "col3", headerName: "Capacity", width: 120,
        valueGetter: ({ row }) => {
          return (row.Capacity);
        },
        valueFormatter: (params) => {
          return (params.value + " "+ "Liter");
        
      },
    },
      
      
      
      
    ];
  let gridColumn = columns;
  let gridRows = dataGridRows;
  let dataGrid = (<StyledDataGrid
    rows={gridRows}
    columns={gridColumn}
    components={{
      Toolbar: CustomToolbar,//handleAcceptClick
    }}
    // slots={{
    //   toolbar: CustomToolbar,
    // }}
    getRowId={(row) => row._id}
    getRowHeight={() => 'auto'}
    onRowClick={handleRowClick}
    // onCellClick={handleCellClick}
    initialState={{
      columns: {
        columnVisibilityModel: {
          createdAt: false,
        },
      },
    }}

  // loading

  />)
  if (tableView == "foodTrashCanTable") {
    dataGrid = (<DataGrid  getRowId={(row) => row._id} rows={trashCanRows} columns={columns2} components={{
      Toolbar: CustomToolbar2,
    }} />)
  }
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        {/* <GridToolbarDensitySelector /> */}
        <GridToolbarExport />
        <ViewMenuButton onClick={handleTableViewChange} />
      </GridToolbarContainer>
    );
  };
  function CustomToolbar2() {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
        <ViewMenuButton onClick={handleTableViewChange} />
      </GridToolbarContainer>
    );
  };


  return (

    dataGrid

  );

}
export default DataGridCont;