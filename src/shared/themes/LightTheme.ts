import { createTheme } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

export const LightTheme = createTheme(
  {
    palette: {
      primary: {
        main: "#30475E",
      },
      error: {
        main: "#F50000",
        light: "#F73333",
        dark: "#AB0000",
      },
      warning: {
        main: "#FFAC33",
        light: "#FF9800",
        dark: "#B26A00",
      },
      success: {
        main: "#33B673",
        light: "#00A451",
        dark: "#007238",
      },
      info: {
        main: "#018781",
        light: "#339F9A",
        dark: "#005E5A",
      },
      text: {
        primary: "#414141",
      },
      background: {
        default: "#DDDDDD",
        paper: "#EEEEEE",
      },
    },
  },
  ptBR
);
