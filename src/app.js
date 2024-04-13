const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const whitelist = ['http://localhost:5173'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

// Configura bodyParser.raw solo para /webhook y en formato raw específico para JSON
app.use('/webhook', bodyParser.raw({ type: 'application/json' }));

// Middleware para datos form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware para parsear JSON para todas las rutas excepto /webhook
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/webhook')) {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Monta los routers desde el archivo de rutas
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
