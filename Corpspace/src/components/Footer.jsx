import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" style={{ padding: '20px 0', marginTop: 'auto', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' My Company. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
}
