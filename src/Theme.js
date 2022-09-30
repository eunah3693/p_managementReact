import { ThemeProvider,createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#3f63bf",
        secondary:"#f4f6f8"
      },
    },
  });

  export default theme;