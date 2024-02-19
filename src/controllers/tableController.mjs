import { Table } from "../models/table.mjs";

export const createTable = async (req, res, next) => {
  try {
    const newTable = await Table.create(req.body);
    return res.status(201).send(newTable);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating table" });
  }
};
