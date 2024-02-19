import { Schema, model } from 'mongoose';

const reservationSchema = new Schema({
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  partySize: {
    type: Number,
  },
  guestInfo: {
    type: Object,
    properties: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, optional: true },
    },
  },
  table: {
    type: Schema.Types.ObjectId,
    ref: 'Table',
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Arrived', 'Completed', 'Cancelled'],
    default: 'Confirmed', // Reservations are confirmed by default
  },
  specialRequests: {
    type: String,
    optional: true, // Allow for special requests
  },
});

export default model('Reservation', reservationSchema);
