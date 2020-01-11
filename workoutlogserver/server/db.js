const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlogserver', 'postgres', 'monkey1', {
    host: 'local host',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to workoutlog postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;