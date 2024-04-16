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

// Conditionally apply express.json() and express.urlencoded() middleware
app.use((req, res, next) => {
    if (req.originalUrl.startsWith('/webhook')) {
        // Bypass these middlewares for webhook routes
        next();
    } else {
        // Apply JSON and URL-encoded parsers to non-webhook routes
        express.json()(req, res, next);
    }
}, express.urlencoded({ extended: true }));

// Mount routers from the 'routes' directory
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});