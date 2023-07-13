import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import LoadBar from '../components/trashCanTableComp/loadBar';
import ColorChip from '../components/trashCanTableComp/chip';

export default function BasicColumnsGrid() {
    return (
        <Box sx={{ height: 250, width: '100%', marginTop: '8%' }}>
            <DataGrid
                columns={[
                    { field: 'col1', headerName: "Food Trash Can No.", width: 150 },
                    {
                        field: "col2", headerName: "Filled Quantity", width: 200,
                        renderCell: ({ row }) => {
                            return ((<LoadBar percentage={row.age} />))
                        }
                    },
                    {
                        field: "col3", headerName: "Status", width: 160,
                        renderCell: ({ row }) => {
                            return ((<ColorChip percentage={row.age} />))
                        }
                    }
                ]}
                rows={[
                    {
                        id: 1,
                        username: '@MUI',
                        age: 90,
                    },
                ]}
            />
        </Box>
    );
}