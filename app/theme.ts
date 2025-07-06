"use client"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6b35",
    },
    secondary: {
      main: "#006BA0",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
})

export default theme