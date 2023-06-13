import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        {/* Menu tổng hết cả cái sidebar */}
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          
          {/* Title Sidebar Information start*/}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
              display="flex"
              justifyContent="space-between"
              alignItems = "center"
              ml="15px"
              >
                <Typography variant="h2" color={colors.grey[200]}>ADMIN</Typography>
                <IconButton  onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* Title Sidebar Information end*/}


          {/* Admin Information start*/}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcATAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAgUGAQMEB//EADUQAAEDAgQDBgUCBwEAAAAAAAEAAgMEEQUSITEGE0EUIlFhgZEHFTJxoULBNVJUYmOCsSP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBQT/xAAfEQEAAgMAAgMBAAAAAAAAAAAAAQIDERIhMRNBYQT/2gAMAwEAAhEDEQA/APr6Iiy+wREQEREBERAVN2Uqm7IkpRERRERAREQEREBU3ZSqbsiSlERFFD5omPax8jGvd9LS4An7K1q0rm5JObCJXyPLam7bkO6gjwHTpayze3MNUpN51DaV1zzw07Q6eWOJpNgXuDb+68GEV0XyuB1VUMa9uaIuleAXFji2+vja/qvBWVrPmE07JozFGwAzBwLWMAudfuT7DwSbajZWs2ty2CORkrA+N7XsOzmm4KpeDB45BBLPKx0ZqJOYI3CxaLAC48Ta5+6960yKm7KVTdkSUoiIosDUFuKTxVIDWwRkOie0DPL4HNuGeQ366Gy92NuvSNp/6mQRHzbYlw9WtcPVY7FK+LC8PmrJ2vcyJt8kYu53kB4rnkn6h0x1ifMumOknhkrZxHTymVzTDGIg1zQAAQ536iTc/hdJpquuMQfyqaNkhdLTtAPOFtLuGrSHWII10VfD3n8TYZU4lxDhwAdUFtNFIDyzEANcp0drcZiNbaWGi26TBcKezI/DaMtGw5DdPtokY9wlv6a1ma6Yajq5aWZlPVSGWKQ5YpnfU13Rjj1v0d6HWxOWWl4s6uw/iOXCZqOp+S1UTTS1wDpOzyeDna271rX2Nuh02zD6g1dBT1D25HyRtc5v8rraj0NwtV36lmdT5h6FTdlKpuy0zKUREVjMaB5lA/8AS2oIcfC8bwPyQPVeeGZrMZgL2ZxBE6QN27zu6D6DOP8AZZLEW07qGbtgJgDbuy3zC2oItre9rW1vay0bGsXrMIoxidbSzBlPIYTIwtdKwE2tMwWaRcDVjhra1tVi1Z3Gm62rzNbN3ZTYtU8RU+JQ4oGYQKYskoOULukue9m9vbzWTY2s7S4yPgNNrlDWnP6m9vFanFxjLSU8XPoaZkRYHMe6razMCLggd7/q7YuM6iqB7DhcNQf8dcw/stxMPltjtvxBLTYrhnDGL0uN4p8zqahs7oZGxiPlxllg3TwNz6+S9nDv8LHeLrVFQATuf/Z61Z3E1ZxZg3b4aeKnw3MWShpzTuboCBezba9bfsd2ooooKSGOnvymsGUk3JHifM7qedutYiKx+u5U3ZSqbsqspRERUyxsmifFKxr43gtcxwuHA7ghfMvim9+A4RBRUU07osQdK2QTOElgC0/UQXE69Svp61T4kcPO4g4eyQZRVU0oliLr2PRwNgTsfcBdMfPcdenLL1xPPt8As25dbU76Lkd1we0ZXNNwRuFumCfDjFK3ERT4k4UUBa481ozkkbADT8rs4h+GuIYdWRRYZMK2N8eZz3gRlpuRa1zcbL05y4uudvK+LLz1ptnwkpKev4Vf2yEyNiq3sDHPdkcLNdqy9jqfDovoqwHAmEDBOF6OjJvLYySn+9xufbb0WfXl5NdzMPXxxMUjr2Km7KVTdlhqUoiIouHNDmlrgC0ixB6rlEHW2FrXB15HEbZ5HOt9rnRcyRNeQTmBGgLHlp9wQrRE1DhjWsaGtFgFyiIoqbspVN2RJSiIiiIiAiIgIiICpuylU3ZElKIiKIiICIiAiIgKm7IiJL//2Q=="}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Minh Thanh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Shoe Admin
                </Typography>
              </Box>


            </Box>
          )}
          {/* Admin Information end*/}

          
          {/* Others Information start*/}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Employee"
              to="/emp"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Customer Information"
              to="/customer"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          {/* Others Information end*/}
        </Menu>
        {/* Menu tổng hết cả cái sidebar end*/}
      </ProSidebar>
      {/* End ProSidebar material */}
    </Box>
    // Output tổng của Component Sidebar
  );
};

export default Sidebar;