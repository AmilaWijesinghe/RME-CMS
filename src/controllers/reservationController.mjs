import { Table } from "../models/table.mjs";
import { Design } from "../models/design.mjs";
import { Reservation } from "../models/reservation.mjs";
import { transporter } from "../utils/mail/nodeMailer.mjs";
import * as dotenv from "dotenv";

dotenv.config();

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
  const bookedReservations = await Reservation.find({
    date,
    event,
    status: { $in: ["Confirmed", "Arrived"] },
  });
  const bookedTableIds = bookedReservations.map(
    (reservation) => reservation.table
  );
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
    const { date, partySize, guestInfo, table, event } = req.body;
    const design = await Design.findById("65d4ee4bb3e582b1c98ef387");
    const tableNumber = await Table.findById(table);
    const newReservation = new Reservation(req.body);
    const reservation = await newReservation.save();
    const orderMail = {
      from: {
        name: "amila",
        address: process.env.USER_EMAIL,
      },
      to: "amilanwijesinghe01@gmail.com",
      subject: `Your Reservation at ${design.restaurantName} is Confirmed!` ,
      text: `Your Reservation at ${design.restaurantName} is Confirmed!`,
      html: `<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
          }
          h1, h2, p {
              margin: 10px 0;
          }
          .table {
              border-collapse: collapse;
              width: 100%;
          }
          .table th, .table td {
              padding: 8px;
              border: 1px solid #ddd;
          }
      </style>
  </head>
      <body>
      <h1>Your Reservation at ${design.restaurantName} is Confirmed!</h1>
      <p>Dear ${guestInfo.name},</p>
      <p>This email confirms your reservation at ${design.restaurantName} on <strong>${date}</strong> for <strong>${event}</strong>. We're excited to welcome you and provide a delightful dining experience.</p>
  
      <h2>Your Reservation Details</h2>
      <table class="table">
          <tr>
              <th>Name</th>
              <td>${guestInfo.name}</td>
          </tr>
          <tr>
              <th>Party Size</th>
              <td>${partySize}</td>
          </tr>
          <tr>
              <th>Table</th>
              <td>${tableNumber.number}</td>
          </tr>
      </table>
  
      <p><strong>Please note:</strong></p>
      <ul>
          <li>If you need to make any changes to your reservation, please contact us at [Phone Number] or reply to this email as soon as possible.</li>
          <li>We recommend arriving 10-15 minutes prior to your reservation time to ensure a smooth seating process.</li>
      </ul>
  
      <p>We look forward to seeing you soon!</p>
  
      <p>Sincerely,</p>
      <p>The Team at ${design.restaurantName}</p>
  
      <p><a href="[Website URL]">Visit our website</a></p>
  </body>`,
    };
     transporter.sendMail(orderMail);
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
