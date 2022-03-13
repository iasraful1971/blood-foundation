import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { Link } from "react-router-dom";
import BloodDonnerInfo from "../Dashbord/BloodDonnerInfo";
import CommentInfo from "../Dashbord/CommentInfo";
import ContactInfo from "../Dashbord/ContactInfo";
import ManageTeam from '../Dashbord/ManageAdmin';
import Team from "../Dashbord/Team";
const Admin = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="admin-dashboard-container">
        <div className="admin-nav">
          <Link to="/">
            <h2> <ArrowBackIosNewIcon> </ArrowBackIosNewIcon>  Back to Home</h2>
          </Link>
        </div>

        <div className="tab-area">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Contact Info" value="1" />
                  <Tab label="Blood Donner Info" value="2" />
                  <Tab label="Comment Section" value="3" />
                  <Tab label="Manage Team" value="4" />
                  <Tab label="Add Team member" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">
                  <ContactInfo/>
              </TabPanel>
              <TabPanel value="2">
                  <BloodDonnerInfo/>
              </TabPanel>
              <TabPanel value="3">
                  <CommentInfo/>
              </TabPanel>
              <TabPanel value="4">
                  <Team/>
              </TabPanel>
              <TabPanel value="5">
                  <ManageTeam/>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Admin;
