import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const validationToken = async (req, res, next) => {
    // Ambil value token dari header otorisasi (Authorization Bearer Token)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Mengambil token setelah 'Bearer'
    
    try {
        // Pastikan bahwa Anda telah menetapkan sebuah secret key dalam file .env
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            return res.status(500).json({ error: "JWT secret key not defined" });
        }

        // Verifikasi token
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Invalid token" });
            } else {
                next();
            }
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};
