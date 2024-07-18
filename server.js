const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./models'); 

dotenv.config();

// Initialize Express
const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session setup
const store = new SequelizeStore({
  db: sequelize,
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: store,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 2 * 60 * 60 * 1000 // 2 hours
  }
}));

store.sync();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/orders', require('./routes/orderRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.render('home', { title: 'Inventory Management System' });
});

// Server port
const PORT = process.env.PORT || 3000;

// Start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
