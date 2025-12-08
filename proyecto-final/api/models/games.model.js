import mongoose from "mongoose"

const gamesShema = new mongoose.Schema({
    name: {type: String, require: true},
    image: {type: String},
    price: {type: Number, require: true},
    platform: {type: String, required: true},
    year: {type: Date, default: Date.now, required: true}
})

export default mongoose.model("Game", gamesShema, "games")