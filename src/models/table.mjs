import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
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
  }

});

export const Table = mongoose.model('Table', TableSchema);
