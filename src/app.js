const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const cors = require('cors');

const whitelist = ['https://mera-parivar-web-page.vercel.app', 'http://localhost:5173'];
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

// Use express.json() for other routes where JSON is expected
app.use(express.json());

// Use express.urlencoded() for URL-encoded body parsing
app.use(express.urlencoded({ extended: true }));

// Mount routers from the 'routes' directory
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
