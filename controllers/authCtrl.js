const { register, login } = require('../services/authService');
const { parseError } = require('../util/parser');

const registerController = require('express').Router();
const loginController = require('express').Router();
const logoutController = require('express').Router();


registerController.get('/', (req, res) => {
    //TODO replace with actual view by assignment
    res.render('register', {
        title: 'Register Page'
    });
});

registerController.post('/', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        }
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords are not the same!');
        }
        const token = await register(req.body.username, req.body.password);
        //TODO - check assignment to see if register creates session
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/'); //TODO - replace with redirect by assignment
    } catch (error) {
        const errors = parseError(error);
        //TODO - add error display to actual template from assignment
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }

});

loginController.get('/', (req, res) => {
    //TODO replace with actual view by assignment
    res.render('login', {
        title: 'Login Page',
    });
});

loginController.post('/', async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/'); //TODO - replace with redirect by assignment
    } catch (error) {
        const errors = parseError(error);
        //TODO - add errordisplay to actual template from assignment
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }
});

logoutController.get('/', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = {
    registerController,
    loginController,
    logoutController
};