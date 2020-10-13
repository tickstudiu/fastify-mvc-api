const mongodb = require('../../mongodb')

const getUsers = async (req, res) => {
    const users = await mongodb.users()
    res.status(200).send(users);
}

module.exports = {
    getUsers
}