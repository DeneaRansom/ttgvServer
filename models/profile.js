const {DataTypes} = require('sequelize');
const db = require(".../db");

const Profile = db.define('profile', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    businessName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    avatarImage: {
        type: DataTypes.STRING,
    },
    storeLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    socialMedia: {
        type: DataTypes.STRING
    },
    businessDescription: {
        type: DataTypes.STRING
    }
});

module.exports = Profile;