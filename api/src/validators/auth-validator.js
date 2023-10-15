const Joi = require('joi');

const registerSchema = Joi.object({
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().strip(),
  email: Joi.string().email().trim().required(),
});

exports.registerSchema = registerSchema;

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

exports.loginSchema = loginSchema;