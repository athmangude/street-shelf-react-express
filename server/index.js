import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './generated/app';

const app = express();

// configure the view engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// configure static assets serving
app.use(express.static(path.resolve(__dirname, '../dist')));

// routes
app.get('/', (request, response) => {
    const initialState = {
        userId: '',
        currentMessage: '',
        messages: []
    };

    const store = createStore((state=initialState) => state);
    const appContent = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    response.render('app', {
        app: appContent,
        initialState: JSON.stringify(initialState)
    });
});

export default app;
