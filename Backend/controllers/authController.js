const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, email, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 

exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id, username: user.username, email: user.email, role: user.role }, '3b05a5466a60f28427af85344855cde422e8dd0ae3818bacc2f453ab99680ed216c8d59e0df71a3d8e9a7b0e9d7f1e102e49f733a2beeca82dbd0c2fbc631aff', { expiresIn: '1h' });

    req.session.user = user;

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.logout = async (req, res) => {
  req.session.destroy();
  res.status(200).send('Logout successful');
};