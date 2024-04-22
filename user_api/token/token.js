import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
    const payload = {
        user: userId
    };

    const token = jwt.sign(payload, process.env.ACCESS_GENERATED_ID, { expiresIn: '1h' });

    return token;
}

export default generateToken;
