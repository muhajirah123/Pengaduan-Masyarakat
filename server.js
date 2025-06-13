const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint pengaduan
app.post('/pengaduan', async (req, res) => {
    const { nama, email, telepon, kategori, lokasi, judul, pengaduan } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'muhajirah1204@gmail.com',         // Ganti dengan email Gmail kamu
            pass: 'muhajirahinformatika321'            // Ganti dengan App Password Gmail
        }
    });

    const mailOptions = {
        from: email,
        to: 'karangtarunaparaikatte@gmail.com',
        subject: `Pengaduan Baru: ${judul}`,
        text: `
Nama: ${nama}
Email: ${email}
Telepon: ${telepon}
Kategori: ${kategori}
Lokasi: ${lokasi}
Judul: ${judul}
Pengaduan:
${pengaduan}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Pengaduan berhasil dikirim!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Gagal mengirim pengaduan.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
