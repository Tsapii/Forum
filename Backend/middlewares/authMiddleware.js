const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Hozzáférés megtagadva' });

  jwt.verify(token, '3b05a5466a60f28427af85344855cde422e8dd0ae3818bacc2f453ab99680ed216c8d59e0df71a3d8e9a7b0e9d7f1e102e49f733a2beeca82dbd0c2fbc631aff', (err, user) => {
      if (err) return res.status(403).json({ message: 'Hozzáférés megtagadva' });
      req.user = user;
      next();
  });
}; 
 