import { landingPage } from "../models/landingPage.mjs";

export const getPageContent = async (req, res) => {
  try {
    const content = await landingPage.findById("65dc13b02b098a7eca70325a");
    return res.status(200).send(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const updatePageContent = async (req, res) => {
  try {
    const { id } = res.params;
    const updatedContent = await landingPage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send(updatedContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
