const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        reviewID:
        {
            type: String,
            required: true
        },
        PersonName:
        {
            type:String,
            required: true
        },
        Rating:
        {
            type: String,
            required: true
        },
        Review:
        {
            type: String,
            required: true
        }
    }
)

const review = mongoose.model("ReviewCollection",reviewSchema);

module.exports = review;