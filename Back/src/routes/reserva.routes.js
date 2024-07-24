import { Router } from "express";
import { createReserva, deleteReserva, getReserva, getReservas, updateReserva } from "../controllers/reserva.controller.js";

const router = Router()
router.post('/reserva', createReserva)
router.put('/reserva/:id', updateReserva)
router.get('/reserva/:id', getReserva)
router.get('/reserva', getReservas)
router.delete('/reserva/:id', deleteReserva)

export default router