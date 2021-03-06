import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
  green,
  lightGreen,
  orange,
  red,
  yellow,
} from '@material-ui/core/colors';

// Create a theme instance.
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

const plantTreesTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: green[800],
      },
      secondary: {
        main: orange[900],
      },
    },
  })
);

export default plantTreesTheme;
export { defaultTheme };
