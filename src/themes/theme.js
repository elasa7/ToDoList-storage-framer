import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

export const colorLight = {
  mainContentBg: `#FFF8ED`, //-----Primary Color
  textColor: `#28241E`,
  taskItemBg: "#ECE3D6",
  accentColor: "#EB6C42", //-----Secondary Color
  iconToolBg: "#FFF8ED",
  iconColor: `#514B42`,
};

export const colorDark = {
  mainContentBg: `#28241E`, //-----Primary Color
  textColor: `#ECE3D6`,
  taskItemBg: "#3F3931",
  accentColor: "#EB6C42", //-----Secondary Color
  iconToolBg: "#514B42",
  iconColor: `#ECE3D6`,
};

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: colorLight.mainContentBg },
    secondary: { main: colorLight.accentColor },
    text: { primary: colorLight.textColor },
    info: { main: colorLight.textColor },
    background: {
      paper: colorLight.taskItemBg,
      default: colorLight.mainContentBg,
      info: colorLight.mainContentBg,
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
      disableElevation: true,
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        backgroundColor: colorLight.taskItemBg,
        borderRadius: "4px",
      },
    },
    MuiOutlinedInput: {
      root: {},
    },
  },
  typography: {
    h2: {},
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: colorDark.mainContentBg },
    secondary: { main: colorDark.accentColor },
    text: { primary: colorDark.textColor },
    info: { main: "#555" },
    background: {
      paper: colorDark.taskItemBg,
      default: colorDark.mainContentBg,
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
      disableElevation: true,
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        backgroundColor: colorDark.taskItemBg,
        borderRadius: "8px",
      },
    },
    MuiOutlinedInput: {
      root: {},
      notchedOutline: {
        borderColor: colorDark.iconToolBg,
      },
    },
  },
});

const Theme = ({ children, darkMode }) => {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
