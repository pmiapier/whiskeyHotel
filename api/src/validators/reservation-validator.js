const Joi = require('joi');

const reservationSchema = Joi.object({
  room_id: Joi.number().integer().positive(),
  room_type: Joi.string(),
  check_in_date: Joi.date(),
  check_out_date: Joi.date()
});
exports.reservationSchema = reservationSchema;

const getReservationSchema = Joi.object({
  check_in_date: Joi.date(),
  check_out_date: Joi.date()
});

exports.getReservationSchema = getReservationSchema;

const roomSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  isMaintaining: Joi.boolean().required()
});

exports.roomSchema = roomSchema;