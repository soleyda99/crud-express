const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().alphanum();
const apellido = Joi.string().alphanum();
const fechaNacimiento = Joi.string();
const fechaInscripcion = Joi.string();
const edad = Joi.number().integer();
const costo = Joi.number().integer();

const createUserSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  fechaNacimiento: fechaNacimiento.required(),
  edad: edad.required(),
  fechaInscripcion: fechaInscripcion.required(),
  costo: costo.required(),
});

const updateUserSchema = Joi.object({
  nombre: nombre,
  apellido: apellido,
  fechaNacimiento: fechaNacimiento,
  edad: edad,
  fechaInscripcion: fechaInscripcion,
  costo: costo,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { getUserSchema, updateUserSchema, createUserSchema };
