const db = require('../db');

exports.createProgram = async (req, res) => {
    try {
        const { name, description } = req.body;
        const [id] = await db('progress').insert({ name, description });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create program' });
    }
};

exports.getPrograms = async (req, res) => {
    try {
        const programs = await db('programs');
        res.status(200).json(programs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch programs' })
    }
};