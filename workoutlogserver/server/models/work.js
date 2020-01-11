module.exports = function(sequelize, DataTypes) {
         return sequelize.define('work', {
             work: DataTypes.STRING,
             owner: DataTypes.INTEGER
         });
 };