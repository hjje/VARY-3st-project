'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_campaign', 'preview', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_campaign', 'preview');
  }
};
