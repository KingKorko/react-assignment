import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventIcon from "@mui/icons-material/Event";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import StarRateIcon from "@mui/icons-material/StarRate";
import PublicIcon from "@mui/icons-material/Public";
import AddToPlaylistIcon from "@mui/icons-material/PlaylistAdd";
import { useNavigate } from "react-router";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

 {/* Assignment Additions - Changed the layout and style of the site header, gave each
  button an icon and border, and customised the drop down menu for when the screen is small.*/}

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/", icon: <HomeIcon fontSize="small" /> },
    { label: "Favorites", path: "/movies/favorites", icon: <FavoriteIcon fontSize="small" /> },
    { label: "Playlist", path: "/movies/playlist", icon: <AddToPlaylistIcon fontSize="small" /> },
    { label: "Upcoming", path: "/movies/upcoming", icon: <EventIcon fontSize="small" /> },
    { label: "Trending", path: "/trending/movie/day", icon: <WhatshotIcon fontSize="small" /> },
    { label: "Top Rated", path: "/movie/top_rated", icon: <StarRateIcon fontSize="small" /> },
    { label: "Popular", path: "/movie/popular", icon: <PublicIcon fontSize="small" /> },
  ];

  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={8}
        sx={{
          background:
            "linear-gradient(90deg, rgba(111, 15, 114, 0.9) 0%, rgba(168, 28, 110, 0.85) 100%)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Toolbar sx={{ minHeight: 64, gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "baseline", flexGrow: 1 }}>
            <Typography variant="h5" fontWeight={800} sx={{ letterSpacing: 0.2 }}>
              TMDB Client
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ ml: 2, display: { xs: "none", sm: "block" } }}
            >
              The answer to your questions about Movies!
            </Typography>
          </Box>

          {!isMobile ? (
            <Stack direction="row" spacing={1}>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  onClick={() => handleMenuSelect(opt.path)}
                  startIcon={opt.icon}
                  color="inherit"
                  size="small"
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 100,
                    fontWeight: 200,
                    border: "1px solid white",
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </Stack>
          ) : (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={() => setAnchorEl(null)}
                PaperProps={{
                  elevation: 6,
                  sx: {
                    mt: 1,
                    minWidth: 220,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, rgba(111, 15, 114, 0.9) 0%, rgba(185, 58, 134, 0.85) 100%)",
                    overflow: "hidden",
                  },
                }}
              >
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="subtitle2">Navigate</Typography>
                </Box>
                <Divider />
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                    sx={{ py: 1 }}
                  >
                    <Box sx={{ mr: 1.2, display: "flex", alignItems: "center" }}>
                      {opt.icon}
                    </Box>
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
