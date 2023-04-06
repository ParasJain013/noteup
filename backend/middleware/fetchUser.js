const jwt = require("jsonwebtoken");
const JWT_SECRET = "NoteUp APP";

const fetchUser=(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send("error: Authenticatr using correct token");
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        // console.log(req.user)  it will log the value of user id.
        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error}).send("INTERNAL SERVER ERROR OCCURED");
    }

}
module.exports = fetchUser;