'use strict';
module.exports = function(app) {
    var controller = require('../controllers/RoutesController');
    app.route('/routes')
    .post(controller.optimized)
}