import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Snackbar, Alert, Container, Typography, Paper } from '@mui/material';
import { format } from 'date-fns';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CustomCalendar.css'; // Asegúrate de tener este archivo CSS

// Configuración del localizador de fecha
const localizer = momentLocalizer(moment);

export default function BookingSystem() {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/reservas');
        const reservas = response.data.map(reserva => ({
          title: reserva.nombre,
          start: new Date(reserva.dia),
          end: new Date(new Date(reserva.dia).getTime() + 60 * 60 * 1000)
        }));
        setEvents(reservas);
      } catch (error) {
        console.error('Error al obtener reservas:', error);
      }
    };

    fetchReservas();
  }, []);

  const handleSelectSlot = async ({ start, end }) => {
    const isAvailable = !events.some(
      (event) =>
        (event.start < end && event.end > start)
    );

    if (isAvailable) {
      try {
        const newReserva = {
          nombre: 'Nueva Reserva',
          dia: start.toISOString(),
          hora: format(start, 'HH:mm'),
          sala: 'Sala 1'
        };
        await axios.post('http://localhost:4001/api/reservas', newReserva);
        setMessage(`Sala reservada de ${format(start, 'HH:mm')} a ${format(end, 'HH:mm')}`);
        const response = await axios.get('http://localhost:4001/api/reservas');
        const reservas = response.data.map(reserva => ({
          title: reserva.nombre,
          start: new Date(reserva.dia),
          end: new Date(new Date(reserva.dia).getTime() + 60 * 60 * 1000)
        }));
        setEvents(reservas);
      } catch (error) {
        console.error('Error al crear reserva:', error);
        setMessage('Error al reservar la sala.');
      }
    } else {
      setMessage('La sala ya está reservada en este horario.');
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const eventPropGetter = (event, start, end, isSelected) => {
    return {
      className: 'event-with-dot',
      style: { backgroundColor: 'transparent' }
    };
  };

  return (
    <Container maxWidth="lg" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Reserva de Salas
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          style={{ height: 500 }}
          eventPropGetter={eventPropGetter}
        />
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message.includes('reservada') ? 'success' : 'error'}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
