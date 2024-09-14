'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        
        await queryInterface.addColumn('Facts', 'source', {
            type: Sequelize.STRING,
            allowNull: true
        })

        await queryInterface.addColumn('Facts', 'author', {
            type: Sequelize.STRING,
            allowNull: true
        })

        await queryInterface.addColumn('Facts', 'authorId', {
            type: Sequelize.INTEGER,
            allowNull: true
        })
    },
};
