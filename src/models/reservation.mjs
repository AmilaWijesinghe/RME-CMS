import { Schema, model } from 'mongoose';

const ReservationSchema = new Schema({
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
      name: { type: String,  },
      email: { type: String,  },
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
    default: 'Confirmed',
  },
  specialRequests: {
    type: String,
    optional: true, // Allow for special requests
  },
});

export const Reservation = model('Reservation', ReservationSchema);
