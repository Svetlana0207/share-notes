const Sequelize = require("sequelize");

const sequelize =  new Sequelize('d76f613j4pmsj7', 'dptcoprdpqhnyc', '38ac244aea4c20e466f90efee28d853672a2889e2b1b9fbe161593da02141550', {
    host: 'ec2-23-23-128-222.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432, 
    ssl: true,
    protocol: "postgres",

    logging: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<< YOU NEED THIS
        }
    }
} );
// const sequelize =  new Sequelize("reactjs", "root", "", {
//     dialect: "mysql",
//     host: "localhost"
// });

const Notes = require('./Notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}