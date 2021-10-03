const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Our initial setup (package requires, port number setup)
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Listening on ${PORT}`));