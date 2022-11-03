const aboutController = require("../controllers/aboutCtrl");
const auth = require("../controllers/authCtrl");
const homeController = require("../controllers/homeCtrl");


module.exports = (app) => {
    app.use(homeController);
    app.use('/register', auth.registerController);
    app.use('/login', auth.loginController);
    app.use('/logout', auth.logoutController);
    app.use('/about', aboutController);
}