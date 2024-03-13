const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    try {
      const decodedToken = jwt.verify(token, 'secret');
      req.userId = decodedToken.userId;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
module.exports= authMiddleware;