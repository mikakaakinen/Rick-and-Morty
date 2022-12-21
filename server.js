const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
    })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
