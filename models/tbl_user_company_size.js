const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user_company_size', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_user_company_size',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_user_company_size_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
