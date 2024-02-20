import { Table } from "../models/table.mjs";
import { Reservation } from "../models/reservation.mjs";

export const availabilityCheck = async (req, res) => {
    const { date, time } = req.params;
    // Parse date and time as appropriate for your database
    const parsedDate = new Date(date);
    const parsedTime = new Date(time);
  
    try {
      const availableTables = await Table.find({
        availability: true,
        capacity: { $gte: req.body.partySize }, // Optional area filter
        // Check for existing reservations overlapping with parsedDate and parsedTime
        reservations: { $nin: [
          { start: { $lte: parsedTime }, end: { $gt: parsedDate } },
          { start: { $lt: parsedDate }, end: { $gte: parsedTime } }
        ]}
      });
      res.json(availableTables);
    } catch (error) {
      res.status(500).json({ message: 'Error checking availability' });
    }
  }

  export const reservationConfirmation = async (req, res) => {
    const { date, time, partySize, ...guestInfo } = req.body;
    // Find the selected table (from step 1)
   
    console.log(req.body)
    const selectedTable = await Table.findById(req.body.tableId);
  
    if (!selectedTable) {
      return res.status(404).json({ message: 'Table not found' });
    }
  
    // Create a new reservation document
    const reservation = new Reservation({
      date,
      time,
      partySize,
      table: selectedTable._id,
      ...guestInfo
    });
  
    try {
      await reservation.save();
      // Update table availability
      selectedTable.availability = false;
      await selectedTable.save();
      // Send confirmation email/SMS
      // ... (code for sending confirmation)
      res.json({ message: 'Reservation confirmed' });
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'Error creating reservation' });
    }
  }