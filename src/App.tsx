// En src/App.tsx
import React, { useState } from 'react';
import Login from './components/login';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

const theme = createTheme({
  
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url('https://res.cloudinary.com/dcba9lt2s/image/upload/v1701026662/samples/balloons.jpg')`, 
          backgroundSize: 'cover',
          height: '100vh', 
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      },
    },
  },
});

function App() {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string, password: string) => {
    setUser(username);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Login onLogin={handleLogin} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
