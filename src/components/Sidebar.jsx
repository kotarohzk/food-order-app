import { ArrowRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import NewItem from "./NewItem";

const drawerWidth = 280;

function Sidebar() {
  const [showForm, setShowForm] = useState(false);
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem key="Add Item" disablePadding>
            <ListItemButton onClick={() => setShowForm(!showForm)}>
              <ListItemIcon>
                <ArrowRight color={showForm ? "secondary" : ""} />
              </ListItemIcon>
              <ListItemText primary="Add Item" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        {showForm && <NewItem />}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
