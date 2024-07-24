import { trusted } from "mongoose";
import Reserva from "/../models/reserva.model.js"

export const createReserva = async (req, res) => {
    const newReserva = new Reserva({
        nombre,
        dia,
        hora,
        sala
    });
    const savedReserva = await newReserva.save();
    res.json(savedReserva)
}

export const updateReserva = async (req, res) => {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!reserva) return res.status(404).json({
        message: 'Reserva no existe'
    })
    res.json(reserva)
}

export const deleteReserva = async (req, res) => {
    const reserva = await Reserva.findByIdAndDelete(req.params.id)
    if (!reserva) return res.status(404).json({
        message: 'Reserva no existe'
    })
    return res.sendStatus(204);
}

export const getReserva = async (req, res) => {
    const reserva = await Reserva.find(req.params.id)
    if(!reserva) return res.status(404).json({
        message: 'Reserva no existe'
    })
    return res.json(reserva)
}

export const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        if (reservas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron reservas' });
        }
        res.json(reservas);
    } catch (error) {
        console.error('Error al obtener reservas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};