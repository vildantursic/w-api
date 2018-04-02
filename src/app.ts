import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';

import { schema } from './graph/index.schema';
import { root } from './graph/index.root';

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * ROUTES
 */
const example = require('./routes/example/index');

app.use('/api/v1/', example);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => console.log('W-API listening on port 3000!'));
