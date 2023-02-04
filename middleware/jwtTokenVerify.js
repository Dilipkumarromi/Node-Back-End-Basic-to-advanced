const jwt =require('jsonwebtoken')
exports.jwtVerify=async(req, res, next) =>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
  
    try {
      const user = jwt.verify(token, process.env.JWT_TOKEN);
      req.user = user;
      next();
    } catch (err) {
      res.status(403).json({ msg: "Token is not valid" });
    }
  }