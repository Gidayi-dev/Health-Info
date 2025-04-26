// const express = require('express');
// const cors = require('cors');
// require('dotenv').config(); // <--- .env support
// const clientRoutes = require('./routes/clients'); // <--- clients route
// const programRoutes = require('./routes/programs'); // <--- programs route
// const enrollmentRoutes = require('./routes/enrollments');

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/clients', clientRoutes);
// app.use('/api/programs', programRoutes);
// app.use('/api/enrollments', enrollmentRoutes);

// // Basic route
// app.get('/', (req, res) => {
//     res.send('Health Information System API is running');
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const clientRoutes = require('./routes/clients');
const programRoutes = require('./routes/programs');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Health Information System API is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});