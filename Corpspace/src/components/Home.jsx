import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function Home() {
  return (
    <Container component="main" maxWidth="lg" style={{ flexGrow: 1, paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Reserva de Salas
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="body1">
          Aquí puede gestionar las reservas de las salas de reuniones de la empresa.
        </Typography>
      </Paper>
    </Container>
  );
}
