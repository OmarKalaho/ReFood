import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ColorModeContext, SignedInContext } from "../../util/context.js";
import { green, deepPurple } from '@mui/material/colors';
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  let pages = [];
  const colorMode = React.useContext(ColorModeContext);
  const SignedInCont = React.useContext(SignedInContext);
  const theme = useTheme();

  if (SignedInCont.signedIn) {
    pages = ["Home", "My Donations"];
  } else {
    pages = ["Home", "Sign In"];
  }

  return (
    <>
      {/* <Box sx={{ height: 10, display: "block", backgroundColor: "#000000" }}>
        <Divider />
      </Box> */}
      <AppBar
        sx={{ backgroundColor: "secondary.main", border: "0px solid  black" }}
        position="fixed"
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              cursor: "default",
              color: "primary.main",
              mx: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Courier New ",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontStyle:"italic",
              fontSize:'x-large',
              color:'#689f38',
            }}
          >
            ReFood
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mx: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Courier New ",
              cursor: "default",
              fontWeight: 700,
              letterSpacing: ".5rem",
              textDecoration: "none",
              fontStyle:"italic",
              color:'#689f38',
            }}
          >
            ReFood
          </Typography>
          <Box sx={{ mr: 2, flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, color: "black" }}>
            <Tooltip
              title={theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
            >
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlinedIcon
                    sx={{ width: 30, height: 30, color: "#ffffff" }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{ width: 30, height: 30, color: "#000000" }}
                  />
                )}
              </IconButton>
            </Tooltip>

            {SignedInCont.signedIn ? (
              <Tooltip title="Account settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ mx: 1 }}>
                  <Avatar sx={{width: 35, height: 35 }} >
                    O
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : null}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
