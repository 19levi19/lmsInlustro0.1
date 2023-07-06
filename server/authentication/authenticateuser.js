import user from "../mongodb/models/user.js";
import Session from "../mongodb/models/sessions.js";
const authenticateUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      // Find the session with the provided token
      const session = await Session.findOne({ tokenId: token });
  
      if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Find the user associated with the session
      const User = await user.findById(session.userId);
  
      if (!User) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Attach the user object to the request for further use
      req.user = user;
  
      // Proceed to the next middleware or route handler
      next();
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

  export default authenticateUser;
  