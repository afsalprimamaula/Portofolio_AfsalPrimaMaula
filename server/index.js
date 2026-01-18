const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Di sini Anda bisa menambahkan logika pengiriman email (Nodemailer)
  // atau menyimpan pesan ke Database (MongoDB/PostgreSQL)
  console.log(`New Message from ${name}: ${message}`);
  res.status(200).json({ success: true, message: "Message received!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));