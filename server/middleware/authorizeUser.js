import user from "../mongodb/models/user.js";
import Session from "../mongodb/models/sessions.js";
const authorizeUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization){
      return res.status(401).json({ message: 'PLease provde aur' });
    }
    let token = req.headers.authorization;
    token = token.split(" ")[1]
    console.log(token);

    const session = await Session.findOne({ tokenId: token });

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    
    const User = await user.findById(session.userId);

    req.user_info =User


    
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

export default authorizeUser;