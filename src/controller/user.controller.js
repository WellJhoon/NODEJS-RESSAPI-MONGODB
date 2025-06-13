import User from "./../models/user.model.js";

export const register = async (req, res) => {
  const { name, lastName, email, password, picture, phoneNumber } = req.body;
  try {
    const user = new User({
      name,
      lastName,
      email,
      password,
      picture,
      phoneNumber,
    });
    await user.save();
    res.status(200).json({ message: "user is created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    res.status(200).json({ message: "Login exitoso", user: {name: user.name, email: user.email, phoneNumber: user.phoneNumber } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
