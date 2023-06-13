import { Box } from "@mui/material";
import Header from "../../components/header";
const DashBoard = () => {
    
    return <Box m="20px">
    <Box 
        display="flex"
        justifyContent = "space-between"
        alignItems = "center"
        >
            <Header title="DashBoard" subtitle="Welcome to your Dashboard"/>
    </Box>
    
    </Box>
};

export default DashBoard;