const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        videoID:
        {
            type: String,
            required: true
        },
        videoURL:
        {
            type:String,
            required: true
        }
    }
)

const videoSc = mongoose.model("VideoCollection",videoSchema);

module.exports = videoSc;