const { UsersModel, UserBanksModel } = require('./models/users.model')

const users = async () => {
    return await UsersModel.find();
};

const userBanks = async () => {
    return await UserBanksModel.find();
};

module.exports = {
    users,
    userBanks,
}