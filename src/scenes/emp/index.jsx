import { Box , Typography , useTheme} from "@mui/material";
import Header from "../../components/header";
import { DataGrid  , GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Emp = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
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
            field : "access" , 
            headerName : "Access Lvl" , 
            flex : 1 , 
            headerAlign: "center",
            align: "center",
            renderCell: ({ row  : {access} }) => {
                return (
                    <Box
                    width= " 60% "
                    m = "0 auto"
                    p = " 5px "
                    display = "flex"
                    justifyContent= "center"
                    backgroundColor = {
                        access === "admin"
                        ? colors.greenAccent[600]
                        : access === "manager"
                        ? colors.greenAccent[800]
                        : colors.greenAccent[400]
                    }
                    borderRadius = "4px"
                    >
                        {access === "admin" &&  <AdminPanelSettingsOutlinedIcon/>}
                        {access === "manager" &&  <SecurityOutlinedIcon/>}
                        {access === "user" &&  <LockOpenOutlinedIcon/>}
                        <Typography color={colors.grey[100]} sx={{ ml : "10px"}}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        }
];

    return (
    <Box 
        m = "20px"
        >
            <Header title="Employee" subtitle="Welcome to your Employee Manage"/>
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
            }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    components ={{Toolbar : GridToolbar}}
                />
             </Box>
    </Box>
    )
};

export default Emp;