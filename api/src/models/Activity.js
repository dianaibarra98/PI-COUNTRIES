const { DataTypes } = require('sequelize');
module.exports = ( sequelize ) => {

   sequelize.define('activity', {
      

     name: {
        type: DataTypes.STRING,
        allowNull: false
     },

     difficulty: {
      type: DataTypes.REAL,
      allowNull: false
     },

     duration: {
      type: DataTypes.STRING,
      allowNull: false
     },

     season: {
      type: DataTypes.STRING ,//ENUM("Verano", "Otoño", "Invierno", "Primavera"),
      allowNull: false
    },

   },
   {
     timestamps: false
   }
   );
};

























//otro models activity mica




// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('activity', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     difficulty:{
//       type: DataTypes.ENUM (['1', '2', '3', '4', '5']),
//       allowNull: true,
      
//     },
//     duration:{
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     season: {
//       type: DataTypes.ENUM ("Summer", "Spring", "Winter", "Autumn"),
//       allowNull: true
//     },
//   },
//   {timestamps: false});
// };
