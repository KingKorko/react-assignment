import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#7C3AED" },      // violet-600
    secondary: { main: "#0EA5E9" },    // sky-500
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    h4: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiAppBar: { styleOverrides: { colorPrimary: { backgroundImage: "none" } } },
    MuiPaper: { styleOverrides: { root: { borderRadius: 14 } } },
  },
});

export default theme;
