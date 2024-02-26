// node --version # Should be >= 18
// npm install @google/generative-ai
import { dummValue } from "../models/dummyValues.mjs";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { transporter } from "../utils/mail/nodeMailer.mjs";
import * as dotenv from 'dotenv';

dotenv.config();

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyB7UDKTIsi4OCEGc7AhFCeqoURReAGyH54";

async function run() {
  const data = await dummValue.find();

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {
      text: `Generate a comprehensive sales report for the current period, incorporating the findings from the data analysis and the predictions for the next month. Include visualizations such as charts or graphs to illustrate trends and provide a narrative summarizing key points. The report should cover areas such as product performance, customer trends, and any notable insights derived from the data analysis. Additionally, highlight the predicted sales figure for the next month and discuss the factors influencing this prediction.`,
    },
    { text: "input: " },
    { text: "output: " },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;

  const orderMail = {
    from: {
      name: design.restaurantName,
      address: process.env.USER_EMAIL,
    },
    to: "sathirabandara1@gmail.com",
    subject: "Your order is ready! ",
    text: "Your order is ready",
    html: `<b> ${response}</b>`,
  }
  await transporter.sendMail(orderMail);


  console.log(response.text());
}

export const aiReport = async (req, res) => {
  try {
    await run();
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
