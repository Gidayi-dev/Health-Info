const db = require("../db");

exports.createProgram = async (req, res) => {
  try {
    const { name, description } = req.body;
    const [id] = await db("programs").insert({ name, description });
    res.status(201).json({ message: "Program created successfully", id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create program" });
  }
};

exports.getPrograms = async (req, res) => {
  try {
    const programs = await db("programs");
    res.status(200).json(programs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};
