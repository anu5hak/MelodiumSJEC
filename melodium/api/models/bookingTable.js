const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        BookingID:
        {
            type: String,
            required: true
        },
        FirstName:
        {
            type: String,
            required: true
        },
        LastName:
        {
            type: String,
            required: false
        },
        ContactNumber:
        {
            type: String,
            require: false
        },
        EmailAddress:
        {
            type: String,
            required: false
        },
        TimeSlots:
        {
            type: Array,
            required: false
        },
        TypeOfSession:
        {
            type: String,
            required: false
        },
        BookingDate:
        {
            type: String,
            required:false
        },
        PaymentStatus:
        {
            type: String,
            required:true
        },
        DateBooked:
        {
            type: Date,
            default: Date.now
        },
        BookingDay:
        {
            type: String,
            required:false
        }
    }
)

const Booking = mongoose.model("BookingTable",bookingSchema);

module.exports = Booking;