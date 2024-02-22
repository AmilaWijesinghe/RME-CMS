import { Table } from "../models/table.mjs";
import { Reservation } from "../models/reservation.mjs";

const updateReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Reservation.findByIdAndUpdate(id, {
      $set: {
        status: "Cancelled",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

async function filterAvailableTables(partySize, date, event) {
  // 1. Get reservations already booked for the specified date and event:
  const bookedReservations = await Reservation.find({
    date,
    event,
    status: { $in: ["Confirmed", "Arrived"] },
  });

  // 2. Extract booked table IDs:
  const bookedTableIds = bookedReservations.map(
    (reservation) => reservation.table
  );

  // 3. Find available tables by filtering out booked ones:
  const availableTables = await Table.find({
    _id: { $nin: bookedTableIds },
    capacity: { $gte: partySize },
  });

  return availableTables;
}

export const getAvailableTabels = async (req, res) => {
  const { partySize, date, event } = req.body;

  try {
    const availableTables = await filterAvailableTables(partySize, date, event);
    res.send(availableTables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const makeAReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    const reservation = await newReservation.save();
    return res.status(201).send(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const updateReservation = async (req, res) => {
  try {
    await updateReservationStatus(req, res);
    await makeAReservation(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const cancelReservation = async (req, res) => {
  try {
    await updateReservationStatus(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
