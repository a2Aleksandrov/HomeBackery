const { parseError } = require("../util/parser");
const data = require('../connData');

function hasUser() {
    return (req, res, next) => {

        if (req.user) {
            next();
        } else {
            const error = [{ msg: 'Not Authorized!' }]
            return res.render('login', {
                title: 'Login Page',
                errors: parseError(error)
            });
        }
    }
}

function isAdmin() {
    return (req, res, next) => {

        if (req.user && req.user.email == data.admin) {
            req.user.admin = true;
        }
        next();
    }
}

function hasAccess() {
    return (req, res, next) => {

        if (req.user && req.user.email == data.admin) {

            next();
        }
        res.redirect('/404');
    }
}

module.exports = {
    hasUser,
    isAdmin,
    hasAccess
}