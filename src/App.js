// eslint-disable-next-line no-unused-vars
import { ColorModeContext , useMode } from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Topbar from "./scenes/global/topBar";
import SideBar from "./scenes/global/Sidebar";
import DashBoard from "./scenes/dashboard";
import Emp from "./scenes/emp";
import Customer from "./scenes/customer";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";

function App() {
  const  [ theme , colorMode ] = useMode();
  return (<ColorModeContext.Provider value = {colorMode}>
              <ThemeProvider theme={theme}>
                {/* /* //Reset to default */}
                <CssBaseline />
                <div className="app">
                <SideBar/>
                    <main className="content"> 
                    <Topbar/>
                    <Routes>
                          <Route path="/" element={<DashBoard />} />
                          <Route path="/emp" element={<Emp />} />
                          <Route path="/customer" element={<Customer />} />
                          <Route path="/invoices" element={<Invoices />} />
                          <Route path="/form" element={<Form />} />
                          <Route path="/faq" element={<FAQ />} />
                          <Route path="/bar" element={<Bar />} />
                          <Route path="/pie" element={<Pie />} />
                          <Route path="/line" element={<Line/>} />
                    </Routes>
                    </main>
                </div>
              </ThemeProvider>
         </ColorModeContext.Provider>)
}

export default App;
