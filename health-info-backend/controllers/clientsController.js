const db = require('../db');

exports.createClient = async (req, res) => {
    try {
        const { first_name, last_name, email, phone } = req.body;
        const [id] = await db('clients').insert({ first_name, last_name, email, phone})
        res.status(201).json({ message: 'Client registered successfully', id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register client' });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await db('clients');
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch client' })
    };
}

exports.getClientProfile = async (req, res) => {
    try {
      const clientId = req.params.id;
      const client = await db('clients').where({ id: clientId }).first();
      if (!client) return res.status(404).json({ error: 'Client not found' });
  
      const programs = await db('enrollments')
        .join('programs', 'enrollments.program_id', 'programs.id')
        .where('enrollments.client_id', clientId)
        .select('programs.id', 'programs.name', 'programs.description');
  
      res.status(200).json({ ...client, programs });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  };