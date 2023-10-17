
// TODO: Refactor
const { reservationSchema, getReservationSchema, roomSchema } = require('../validators/reservation-validator');
const createError = require('../utils/create-error');
const prisma = require('../models/prisma');

exports.createReservation = async (req, res, next) => {
    // Probably need to get the user ID from session, too (done)
    // If room is already booked for those dates -> fail (done)
    // If room isMaintaining -> fail (done)
    if (!req.user) {
      res.status(401).json("unauthenticated");
      return {}
    }
    try {
        const { value, error } = reservationSchema.validate(req.body);
        value.user_id = req.user.id;

        if (error) {
          return next(error);
        }

        const reservations = await checkReservationsByDateAndRoomID(value);

        if (reservations.length > 0) {
          return next(createError('room is already booked for those dates', 400));
        }

        const isMaintaining = await isRoomMaintaining(value);
        if (isMaintaining) {
          return next(createError('room is under maintenance', 400));
        }

        const reservation = await prisma.reservation.create({
          data: value
        });

        res.status(201).json({ reservation });
      } catch (err) {
        next(err);
      }
}

// Check to see if a room is available for a given date range
exports.checkRoomAvailability = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return {}
  }
  try {
    const { value, error } = reservationSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const reservations = await checkReservationsByDateAndRoomID(value);
    res.status(200).json({ "available": reservations.length === 0 });
  } catch (err) {
    next(err);
  }
}

// Get all room availabilities for a given date range
// exports.getAllRoomAvailabilities = async (req, res, next) => {
//   if (!req.user) {
//     res.status(401).json("unauthenticated");
//     return {}
//   }
//   try {
//     const { value, error } = getReservationSchema.validate(req.body);
//     if (error) {
//       return next(error);
//     }
//     const reservations = await checkAllReservationsByDate(value);

//     res.status(200).json({ reservations });
//   } catch (err) {
//     next(err);
//   }
// }

// This will probably be in admin-controller eventually
// We will have a seperate endpoint for checking to see if a room is available
exports.getAllReservations = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return {}
  }
  try {
    const { value, error } = getReservationSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const reservations = await checkAllReservationsByDate(value);
    res.status(200).json({ reservations });
  } catch (err) {
    next(err);
  }
}

// This should be in admin-controller eventually
exports.updateRoomMaintaining = async (req, res, next) => {
  if (!req.user || req.user.role !== 'ADMIN') {
    res.status(401).json("unauthenticated");
    return {}
  }
  try {
    const { value, error } = roomSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const room = await prisma.room.update({
      data: value,
      where: {
        id: value.id
      }
    });
    res.status(201).json({ room });
  } catch (err) {
    next(err);
  }
}

// getUserReservations

// getReservationsByAdmin




const checkReservationsByDateAndRoomID = async (value) => {
  const reservations = await prisma.reservation.findMany({
    where: {
      check_in_date: {
        gte: value.check_in_date
      },
      check_out_date: {
        lte: value.check_out_date
      },
      room_id: value.room_id
    }
  });
  return reservations;
}

const checkAllReservationsByDate = async (value) => {
  const reservations = await prisma.reservation.findMany({
    where: {
      check_in_date: {
        gte: value.check_in_date
      },
      check_out_date: {
        lte: value.check_out_date
      },
    }
  });
  return reservations;
}

const isRoomMaintaining = async (value) => {
  const room = await prisma.room.findFirst({
    where: {
      id: value.room_id
    }
  });
  return room.isMaintaining;
}
