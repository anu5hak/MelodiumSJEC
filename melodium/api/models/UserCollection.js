const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        UserID:
        {
            type: String,
            required: true
        },
        Password:
        {
            type: String,
            required: true
        }
    }
)

const User = mongoose.model("UserCollection",userSchema);

module.exports = User;