//fetching user using authhToken  and returning its details at the getUser endpoint
const jwt = require("jsonwebtoken");

const JWT_SECRET = "5JSD@$4";

const fetchuser=(req,res,next)=>{

    const token=req.header('auth-token')  //abhi k lie m auth token header(jha pr hm content-type vgera likhthe hai) me dalra hu 
    if(!token)
    {
        res.sendStatus(401).json({error:"Please enter a valid token"})
    }
    try {
        
    const data= jwt.verify(token,JWT_SECRET)  //verifies the token and returns if it is valid or not 
    req.user=data.user;

    next(); //this is the function where i am sending the details of the user 
    } catch (error) {
        res.sendStatus(401).json({error:"Please enter a valid token"})
    }
    
}

module.exports=fetchuser;