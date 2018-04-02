import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './models/example/index.schema';
import { resolvers } from './models/example/index.root';

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

const schema = makeExecutableSchema({typeDefs, resolvers});
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.listen(3000, () => console.log('W-API listening on port 3000!'));
