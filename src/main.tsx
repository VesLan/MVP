import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './themes/mainTheme';
import App from './App';
import { AuthProvider } from './components/_AuthProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
