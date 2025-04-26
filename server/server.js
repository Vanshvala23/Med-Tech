const express = require('express');
const connectDB = require('./db/db');
const authRouter = require('./routes/authRoutes');
const medicineRouter = require('./routes/medicineRoutes');
const QRcodeRoutes = require('./routes/QRcodeRoutes');
const cors = require('cors');
const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}));
app.use('/auth', authRouter);
app.use('/medicine', medicineRouter);
app.use('/qrcode', QRcodeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
