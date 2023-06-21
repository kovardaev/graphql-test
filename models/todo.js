const Sequalize = require('sequelize');
const sequelize = require('../utils/database');

const todo = sequelize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequalize.INTEGER
    },
    done: {
        type: Sequalize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequalize.STRING,
        allowNull: false    
    }
});

module.exports = todo;