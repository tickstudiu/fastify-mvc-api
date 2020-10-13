const { getUsers } = require('./users.controller')

const routes  = async (fastify, options) => {
    fastify.get('/', getUsers);
};

module.exports = routes