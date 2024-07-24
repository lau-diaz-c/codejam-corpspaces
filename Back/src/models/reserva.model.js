import mongoose, {Schema} from "mongoose";

const reservaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    dia: {
        type: Date,
        required: true,
    },
    hora: {
        // será mejor que sea un entero y lo mantengamos entre 0000 y 2400 para poder ser mas exactas?
        type: String,
        required: true,
    },
    sala: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Reserva", reservaSchema)