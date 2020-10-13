const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String },
    username: { type: String },
    password: { type: String },
    user: { type: String },
    line: { type: String },
    point: { type: Number },
    spin: { type: Number },
    comefrom: { type: Number },
    status: { type: Number },
    sale_credit: { type: Number },
}, { timestamps: true })
const UsersModel = mongoose.model('tb_users', userSchema)

const userBankSchema = new mongoose.Schema({
    id: { type: String },
    user_id: { type: String },
    bank_id: { type: String },
    name: { type: String },
    account: { type: String },
    status: { type: Number },
}, { timestamps: true })
const UserBanksModel = mongoose.model('tb_user_banks', userBankSchema)

const userGroupSchema = new mongoose.Schema({
    id: { type: String },
    user_id: { type: String },
    group_id: { type: String },
    status: { type: Number },
}, { timestamps: true })
const userGroupsModel = mongoose.model('tb_user_groups', userGroupSchema)

const userGroupDefaultSchema = new mongoose.Schema({
    id: { type: String },
    type: { type: Number },
    group_id: { type: String },
    status: { type: Number },
}, { timestamps: true })
const userGroupDefaultsModel = mongoose.model('tb_user_group_defaults', userGroupDefaultSchema)

const userSaleSchema = new mongoose.Schema({
    id: { type: String },
    sale_user_id: { type: String },
    user_id: { type: String },
    turnover: { type: String },
    winloss: { type: String },
}, { timestamps: true })
const userSalesModel = mongoose.model('tb_user_sales', userSaleSchema)

const userSaleCreditSchema = new mongoose.Schema({
    id: { type: String },
    user_id: { type: String },
    amount: { type: Number },
    admin_id: { type: String },
    admin_comfirmed_at: { type: Date },
    status: { type: Number },
}, { timestamps: true })
const userSaleCreditsModel = mongoose.model('tb_user_sale_credits', userSaleCreditSchema)

module.exports = {
    UsersModel,
    UserBanksModel,
    userGroupsModel,
    userGroupDefaultsModel,
    userSalesModel,
    userSaleCreditsModel
}