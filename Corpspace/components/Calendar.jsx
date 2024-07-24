import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Asegúrate de importar el CSS
import axios from 'axios'; // Para realizar solicitudes HTTP

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Obtener reservas desde el servidor
        const fetchReservas = async () => {
            try {
                const response = await axios.get('/api/reservas'); // Ajusta la URL según tu configuración
                setReservas(response.data);
            } catch (error) {
                console.error('Error al obtener reservas:', error);
            }
        };

        fetchReservas();
    }, []);

    // Obtener los días ocupados
    const getOccupiedDays = () => {
        const occupiedDays = reservas.map(reserva => new Date(reserva.dia).toDateString());
        return occupiedDays;
    };

    // Verificar si un día está ocupado
    const isDayOccupied = (date) => {
        return getOccupiedDays().includes(date.toDateString());
    };

    // Manejar el cambio de fecha en el calendario
    const handleDateChange = newDate => {
        setDate(newDate);
    };

    return (
        <div>
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date }) => isDayOccupied(date) ? 'occupied' : null}
            />
            <style>
                {`
                    .occupied {
                        background-color: red;
                        color: white;
                    }
                `}
            </style>
        </div>
    );
};

export default CalendarComponent;
