const routes = require('express').Router();
const teamActivities = require('./teamRoutes');
const ecommerceProject = require('./e-commerceProject');

routes
    .use('/teamActivities', teamActivities)
    .use('/ecommerceProject', ecommerceProject)

    .get('/', (req, res, next) => {
        res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
    .use((req, res, next) =>{
        res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
    })

module.exports = routes;