import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
body{
 background:${({ theme }) => theme.mainContentBg};
 color:${({ theme }) => theme.textColor}
 }`;

export const globalStyleFn = (switchTheme) => {
  const theme = switchTheme ? lightTheme : darkTheme;
  return theme;
};
