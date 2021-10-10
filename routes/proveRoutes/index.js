const routes = require('express').Router();

routes
      .use('/prove01', require('./'))
      .use('/prove02', require('./'))
      .use('/prove03', require('./prove03/index'))
      .use('/prove04', require('./prove04/app'))

      .get('/', (req, res, next) => {
          res.render('pages/proveActivities/', {
              pageTitle: 'Prove Activities',
              path: '/proveActivities'});
      });

module.exports = routes;