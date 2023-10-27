import jwt from 'jsonwebtoken'
import User from '../../models/UsersModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    // jika user tidak ditemukan
    if (!userExist) {
        return res.json({
            status: 'failed',
            msg: "username atau password salah"
        }).status(404)
    }

    // jika password salah
    if (userExist.password != password) {
        return res.json({
            status: 'failed',
            msg: "username atau password salah"
        }).status(404)
    }

    const payload = {
        id: userExist._id,
    }

    // generate token
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '3h'
    });

    res.json({
        status: 'success',
        msg: "berhasil login",
        token: token,
    }).status(200)
}