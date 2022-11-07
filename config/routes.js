const { isAdmin, hasAccess, hasOrder } = require("../middlewares/guards");
const homeController = require("../controllers/homeCtrl");
const auth = require("../controllers/authCtrl");
const catalogController = require("../controllers/catalogCtrl");
const detailsController = require("../controllers/detailsCtrl");
const addController = require("../controllers/addCtrl");
const cartController = require("../controllers/cartCtrl");
const aboutController = require("../controllers/aboutCtrl");
const notFoundController = require("../controllers/404Ctrl");
const orderController = require("../controllers/orderCtrl");


module.exports = (app) => {

    app.use(isAdmin());
    app.use(homeController);
    app.use('/register', auth.registerController);
    app.use('/login', auth.loginController);
    app.use('/logout', auth.logoutController);
    app.use('/catalog', catalogController);
    app.use('/details', detailsController);
    app.use('/order', orderController);
    app.use('/add', hasAccess(), addController);
    app.use('/cart', hasOrder(), cartController);
    app.use('/about', aboutController);

    app.all('/*', notFoundController);
}

