import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Button, Snackbar, Alert } from '@mui/material';
import { format, parseISO } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configuración del localizador de fecha
const localizer = momentLocalizer(require('moment'));

// Datos de ejemplo para eventos (reservas)
const events = [
  {
    title: 'Meeting Room 1',
    start: new Date(2024, 7, 24, 9, 0), // 24 de julio, 2024 a las 09:00
    end: new Date(2024, 7, 24, 10, 0), // 24 de julio, 2024 a las 10:00
  },
  {
    title: 'Meeting Room 2',
    start: new Date(2024, 7, 24, 11, 0), // 24 de julio, 2024 a las 11:00
    end: new Date(2024, 7, 24, 12, 0), // 24 de julio, 2024 a las 12:00
  },
];

export default function BookingSystem() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleSelectSlot = ({ start, end }) => {
    const isAvailable = !events.some(
      (event) => 
        (event.start < end && event.end > start) // Solapamiento de eventos
    );

    if (isAvailable) {
      setMessage(`Sala disponible de ${format(start, 'HH:mm')} a ${format(end, 'HH:mm')}`);
    } else {
      setMessage('La sala ya está reservada en este horario.');
    }
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h1>Reserva de Salas</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message.includes('disponible') ? 'success' : 'error'}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
