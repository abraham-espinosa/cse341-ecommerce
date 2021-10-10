const routes = require('express').Router();

routes
    .use('/e-commercer', require('./views/shop/index'))
    .get('/', (req, res, next) => {
        res.render('pages/ecommerceProject/', {
            pageTitle: 'E-commerce Project',
            path: '/ecommerceProject'
        });
    });

module.exports = routes;