const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
let Schema = mongoose.Schema;

let rolesValudos = {
  values : ['EMPLEADO_ROLE', 'PATRON_ROLE'],
  message : '{VALUE} no es un rol valido'
};


let usuarioSchema = new Schema({
  nombre : {
    type : String,
    required : [true, 'El nombre es necesario']
  },
  email : {
    type : String,
    unique : true,
    required : [true, 'El correo es necesario']
  },
  password : {
    type : String,
    required : [true, 'La contraseña es necesaria']
  },
  sexo : {
    type : String,
    required : [true, 'El sexo es requerido']
  },
  edad : {
    type : Number,
    required : [true, 'La edad es requedira']
  },
  estadoCivil : {
    type : String,
    required : false
  },
  estudios : {
    type : String,
    required : false
  },
  area : {
    type : String,
    required : false
  },
  tipoContratacion : {
    type : String,
    required : false
  },
  tiempoLaborando : {
    type : String,
    required : false
  },
  img : {
    type : String,
    required : false,
  },
  role : {
    type : String,
    default : 'EMPLEADO_ROLE',
    enum : rolesValudos
  },
  estado : {
    type : Boolean,
    default : true
  },
});

usuarioSchema.methods.toJSON = function(){
  let user = this;
  let userObject = user.toObject();

  delete userObject.password;

  return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message : '{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuario', usuarioSchema);
