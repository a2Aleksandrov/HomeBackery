const homeController = require("../controllers/homeCtrl");
const auth = require("../controllers/authCtrl");
const catalogController = require("../controllers/catalogCtrl");
const aboutController = require("../controllers/aboutCtrl");


module.exports = (app) => {
    app.use(homeController);
    app.use('/register', auth.registerController);
    app.use('/login', auth.loginController);
    app.use('/logout', auth.logoutController);
    app.use('/catalog', catalogController);
    app.use('/about', aboutController);
}