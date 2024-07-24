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
}