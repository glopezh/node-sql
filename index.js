const { Sequelize } = require("sequelize");

// Crear conexión pero nop hace nada

const sequelize = new Sequelize({
  host: "localhost",
  username: "geral",
  password: "geral",
  database: "animales",
  // colocas otra bd que no exista para probar los errores.
  dialect: "mysql",
});

// Probar conexión

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("No me he podido conectar a la base de datos");
    console.log(err.message);
  });
