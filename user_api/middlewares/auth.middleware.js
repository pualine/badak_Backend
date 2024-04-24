import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
    // Get token from the request header
    const token = req.headers.authorization;

    // Check if token is present
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    try {
        // Get accessToken
        const accessToken = token.split(' ')[1];
        // Verify token asynchronously
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_GENERATED_ID);

        // Attach the decodedToken to the user request
        req.user = decodedToken.user;
        console.log("User", decodedToken.user);
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized: Invalid token provided" });
    }
}

export default authenticate;
