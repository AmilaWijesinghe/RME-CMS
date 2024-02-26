import { aboutPage } from "../models/aboutPage.mjs";

export const getPageContent = async (req, res) => {
  try {
    const content = await aboutPage.findById("65dc18f2b8de1b1ff34058c4");
    return res.status(200).send(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const updatePageContent = async (req, res) => {
  try {
    const { id } = res.params;
    const updatedContent = await aboutPage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send(updatedContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
