// En src/components/Login.tsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Corregido aquí

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'usuario' && password === 'contraseña') {
      onLogin(username, password);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h6" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </div>
    </Container>
  );
};

export default Login;
