import { Schema, model } from 'mongoose';

const tableSchema = new Schema({
  number: {
    type: Number,
    unique: true,
  },
  capacity: {
    type: Number,
  },
  area: {
    type: String,
    enum: ['Indoor', 'Outdoor', 'Patio'],
    default: 'Indoor'
  },
  availability: {
    type: Boolean,
    default: true
  },

});

export const Table =  model('Table', tableSchema);
