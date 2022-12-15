import {
  AccountBox,
  Article,
  Group,
  Home,
  LightMode,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ setMode, mode }) => {
  const Menus = [
    {
      title: "Home",
      icon: <Home />,
    },
    {
      title: "Page",
      icon: <Article />,
    },
    {
      title: "Groups",
      icon: <Group />,
    },
    {
      title: "Marketplace",
      icon: <Storefront />,
    },
    {
      title: "Friends",
      icon: <Person />,
    },
    {
      title: "Setting",
      icon: <Settings />,
    },
    {
      title: "Profile",
      icon: <AccountBox />,
    },
  ];
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {Menus.map((items, index) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{items.icon}</ListItemIcon>
                  <ListItemText primary={items.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        {/* For Dark Mode */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {mode === "light" ? <LightMode /> : <ModeNight />}
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
