const express = require('express');
const connectDB = require('./db/db');
const authRouter = require('./routes/authRoutes');

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json());
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
