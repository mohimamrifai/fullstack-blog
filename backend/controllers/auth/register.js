import User from "./../../models/UsersModel.js";

export const register = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  try {
    // cari user berdasarkan email
    const user = await User.findOne({ email: email });

    // jika user sudah ada
    if (user) {
      res
        .json({
          status: "failed",
          msg: "email atau username sudah pernah di gunakan.",
        })
        .status(404);
    }

    // cek apakah password sudah sama dan sesuai
    if (password !== confirm_password) {
      res
        .json({
          status: "failed",
          msg: "registrasi gagal",
        })
        .status(404);
    }

    await User.create({
      username,
      email,
      password,
    });

    res.json({
      status: "success",
      msg: "berhasil registrasi",
    });
  } catch (error) {
    res.json({
      status: "failed",
      msg: "registrasi gagal",
    });
  }
};
