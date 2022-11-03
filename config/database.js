const mongoose = require('mongoose');
const data = require('../connData');

const CONNECTION_STRING = data.databaseConnection;

module.exports = async (app) => {
    try {
        mongoose.connect(CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected!');
        
    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
}