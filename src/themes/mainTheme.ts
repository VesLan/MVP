import { createTheme, ThemeOptions } from '@mui/material';
import '@fontsource/creepster';
import '@fontsource/frijole';

export const mainTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    secondary: { main: '#00000' },
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'frijole',
      'Creepster',
      'cursive',
    ].join(','),
  },
});
