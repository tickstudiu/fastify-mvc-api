require('dotenv/config')
const fastify = require('fastify')
const cors = require('fastify-cors')
const mongoose = require('mongoose')

const usersRoute = require('./routes/users/users.router') 

const app = fastify();

mongoose.connect('<uri>', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb database connection established successfully");
});

app.register(cors)
app.register(usersRoute, { prefix: '/users' });

app.listen(process.env.APP_PORT, function (err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server is up and running on port 3000...');
}); 