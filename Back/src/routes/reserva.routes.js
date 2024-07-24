import { Router } from "express";
import { createReserva, deleteReserva, getReserva, getReservas, updateReserva } from "../controllers/reserva.controller.js";

const router = Router()
router.post('/reservas', createReserva)
router.put('/reservas/:id', updateReserva)
router.get('/reservas/:id', getReserva)
router.get('/reservas', getReservas)
router.delete('/reservas/:id', deleteReserva)

export default router