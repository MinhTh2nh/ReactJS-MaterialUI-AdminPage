import { Box , Typography , useTheme} from "@mui/material";
import Header from "../../components/header";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";


const Customer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" , flex : 0.5  },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            headerAlign: "center",
            align : "center",
            renderCell : (params) => (
                <Typography color = {colors.greenAccent[500]}>
                        ${params.row.cost}
                </Typography>
            ),
            
        },
        
];

    return (
    <Box 
        m = "20px"
        >
            <Header title="Invoices" subtitle="List of Invoices For Ref"/>
            <Box
            m="20px 0 0 0"
            height="75vh"
            sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer": {
                padding : "10px ",
            },
            }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                    components ={{Toolbar : GridToolbar}}
                />
             </Box>
    </Box>
    )
};

export default Customer;