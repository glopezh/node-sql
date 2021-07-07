const { Sequelize, DataTypes } = require("sequelize");

// Crear conexión pero nop hace nada

const sequelize = new Sequelize({
  host: "localhost",
  username: "geral",
  password: "geral",
  database: "pruebas",
  // colocas otra bd que no exista para probar los errores.
  dialect: "mysql",
});

// Probar conexión

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("No me he podido conectar a la base de datos");
    console.log(err.message);
  });

 */
  // Schemas son las formas que tienen los objetos

// SE ESTA PASANDO 3 COSAS

  const Alumno = sequelize.define(
    "Alumno",
    {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  nombre: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  apellidos:DataTypes.STRING(32),
  dni: {
    type: DataTypes.STRING(9),
    unique: true
  },
  nota: {
    type: DataTypes.DECIMAL(3,2),
    // Colocar restriccion que no esta en la BD
    validate: {
      max: 10,
      min: 0,
    },
  },
},
{
  tableName: "alumnos",
  timestamps: false,
  });

  // Metodo create

  Alumno.create({
    nombre: "Luis",
    apellidos: "Martinez",
    dni: "98989899T",
    nota: 3,
  }); 
