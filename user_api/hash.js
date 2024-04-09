import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

(async () => {
    try {
        const hashedPassword = await hashPassword('user_password');

        // saving hashed password to database
        const newUser = new User({
            username: 'user123',
            email: 'user@example.com',
            password: hashedPassword
        });

        await newUser.save();
    } catch (error) {
        console.error('Error:', error);
    }
})();
