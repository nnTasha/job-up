import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto-mono'; // Defaults to weight 400
import '@fontsource/roboto-mono/500.css'; // Specify weight
import '@fontsource/roboto-mono/700.css'; // Specify weight

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto Mono"', 'Roboto', 'monospace'].join(', '),
  },
});

export default theme;
