const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const data = require('../connData');

const JWT_SECRET = data.session;


async function register(username, email, password) {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
        throw new Error('Този имейл е вече регистриран.');
    }
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername) {
        throw new Error('Името е заето.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        hashedPassword
    });

    return createSession(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Грешен имейл или парола!');
    }
    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!hasMatch) {
        throw new Error('Грешен имейл или парола!');
    }
    return createSession(user);
}

function createSession({ _id, username, email }) {
    const payload = {
        _id,
        username,
        email
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken
}