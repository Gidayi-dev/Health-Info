const db = require('../db');

exports.enrollClient = async (req, res) => {
    try {
      const { client_id, program_id } = req.body;
  
      // Check if enrollment already exists
      const existing = await db('enrollments')
        .where({ client_id, program_id })
        .first();
  
      if (existing) {
        return res.status(400).json({ error: 'Client already enrolled in this program' });
      }
  
      await db('enrollments').insert({ client_id, program_id });
      res.status(201).json({ message: 'Client enrolled successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to enroll client' });
    }
  };