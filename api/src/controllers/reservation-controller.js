// TODO: Refactor
const {
  reservationSchema,
  getReservationSchema,
  roomSchema,
} = require("../validators/reservation-validator");
const createError = require("../utils/create-error");
const prisma = require("../models/prisma");

exports.createReservation = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    const { value, error } = reservationSchema.validate(req.body);
    value.user_id = req.user.id;

    if (error) {
      return next(error);
    }

    roomIds = await getAvailableRoomsByRoomType(
      value.room_type,
      value.check_in_date,
      value.check_out_date
    );

    if (roomIds.length === 0) {
      return next(createError("no rooms available for those dates", 400));
    }

    value.room_id = roomIds[0].id; // pick the first room available for this room type

    const reservations = await checkReservationsByDateAndRoomID(value);

    if (reservations.length > 0) {
      return next(createError("room is already booked for those dates", 400));
    }

    const isMaintaining = await isRoomMaintaining(value);
    if (isMaintaining) {
      return next(createError("room is under maintenance", 400));
    }

    delete value.room_type;
    const reservation = await prisma.reservation.create({
      data: value,
    });

    res.status(201).json({ reservation });
  } catch (err) {
    next(err);
  }
};

exports.changeReservation = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    const { value, error } = reservationSchema.validate(req.body);
    value.user_id = req.user.id;

    if (error) {
      return next(error);
    }

    roomIds = await getAvailableRoomsByRoomType(
      value.room_type,
      value.check_in_date,
      value.check_out_date,
      value.id
    );
    if (roomIds.length === 0) {
      return next(createError("no rooms available for those dates", 400));
    }

    value.room_id = roomIds[0].id; // pick the first room available for this room type

    const reservations = await checkReservationsByDateAndRoomID(value);

    if (reservations.length > 0) {
      return next(createError("room is already booked for those dates", 400));
    }

    const isMaintaining = await isRoomMaintaining(value);
    if (isMaintaining) {
      return next(createError("room is under maintenance", 400));
    }

    delete value.room_type;
    const reservation = await prisma.reservation.update({
      data: value,
      where: {
        id: value.id,
        user_id: value.user_id,
      },
    });

    res.status(201).json({ reservation });
  } catch (err) {
    next(err);
  }
};

exports.cancelReservation = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    const { value, error } = reservationSchema.validate(req.body);
    value.user_id = req.user.id;

    if (error) {
      return next(error);
    }
    console.log(value);
    const reservation = await prisma.reservation.delete({
      where: {
        id: value.id,
        user_id: value.user_id,
      },
    });

    res.status(201).json({ reservation });
  } catch (err) {
    next(err);
  }
};

exports.cancelReservationAdmin = async (req, res, next) => {
  if (!req.user && !req.user === "ADMIN") {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    delete req.body.user;
    delete req.body.room;
    const { value, error } = reservationSchema.validate(req.body);
    value.user_id = req.user.id;

    if (error) {
      return next(error);
    }
    console.log(value);
    const reservation = await prisma.reservation.delete({
      where: {
        id: value.id,
      },
    });

    res.status(201).json({ reservation });
  } catch (err) {
    next(err);
  }
};

const getAllReservations = async (value) => {
  const reservations = await prisma.reservation.findMany({
    include: {
      user: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      room: {
        select: {
          type: true,
        },
      },
    },
  });
  return reservations;
};

exports.getAllReservations = async (req, res, next) => {
  if (!req.user && !req.user === "ADMIN") {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    const { value, error } = getReservationSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const reservations = await getAllReservations(value);
    res.status(200).json({ reservations });
  } catch (err) {
    next(err);
  }
};

exports.getReservationsByUser = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return;
  }
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        user_id: req.user.id,
      },
    });

    const enhancedReservations = await Promise.all(
      reservations.map(async (reservation) => {
        // get roomType from room_id
        const room = await prisma.room.findFirst({
          where: {
            id: reservation.room_id,
          },
        });
        return {
          ...reservation,
          room_type: room?.type, // Use optional chaining in case room is undefined
        };
      })
    );

    res.status(200).json({ reservations: enhancedReservations });
  } catch (err) {
    next(err);
  }
};

// This should be in admin-controller eventually
exports.updateRoomMaintaining = async (req, res, next) => {
  if (!req.user || req.user.role !== "ADMIN") {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    const { value, error } = roomSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const room = await prisma.room.update({
      data: value,
      where: {
        id: value.id,
      },
    });
    res.status(201).json({ room });
  } catch (err) {
    next(err);
  }
};

exports.getReservationById = async (req, res, next) => {
  if (!req.user) {
    res.status(401).json("unauthenticated");
    return {};
  }
  try {
    const reservation = await prisma.reservation.findFirst({
      where: {
        id: req.params.id,
        user_id: req.user.id,
      },
    });
    res.status(200).json({ reservation });
  } catch (err) {
    next(err);
  }
};

// Should return all rooms that are available between a given date range
// Note: Rooms that are inMaintenance should not be available
// Example:
// {
//   rooms: {
//     cozy: 2,
//     chillout: 2,
//     party: 1
//   }

function isDateOverlap(newBookingStart, newBookingEnd, reservationStart, reservationEnd) {
  return newBookingStart <= reservationEnd && newBookingEnd >= reservationStart;
}

exports.getRoomsAvailable = async (req, res, next) => {
  // Check for user authentication
  if (!req.user) {
    return res.status(401).json({ message: "unauthenticated" });
  }

  try {
    const { value, error } = getReservationSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const reservations = await checkAllReservationsByDate(value);
    const rooms = await prisma.room.findMany();

    const roomsAvailable = {
      Cozy: 0,
      Chillout: 0,
      Party: 0,
    };

    rooms.forEach((room) => {
      if (!room.isMaintaining) {
        roomsAvailable[room.type]++;
      }
    });

    reservations.forEach((reservation) => {
      const associatedRoom = rooms.find(
        (room) => room.id === reservation.room_id
      );

      if (associatedRoom && !associatedRoom.isMaintaining) {
          roomsAvailable[associatedRoom.type]--;
      }
    });

    res.status(200).json({ roomsAvailable });
  } catch (err) {
    next(err);
  }
};

// getUserReservations

// getReservationsByAdmin

const checkReservationsByDateAndRoomID = async (value) => {
  let queryConditions = {
    AND: [
      {
        check_in_date: {
          gte: value.check_in_date,
        },
      },
      {
        check_out_date: {
          lte: value.check_out_date,
        },
      },
      {
        room_id: value.room_id,
      },
    ],
  };

  if (value.id) {
    queryConditions.AND.push({
      id: {
        not: value.id,
      },
    });
  }

  const reservations = await prisma.reservation.findMany({
    where: queryConditions,
  });

  return reservations;
};


const getAvailableRoomsByRoomType = async (type, checkInDate, checkOutDate, reservationID) => {
  // 1. Fetch all rooms of a given type.
  const allRoomsOfType = await prisma.room.findMany({
    where: {
      type: type,
      isMaintaining: false,
    },
  });


  let reservedRoomIdToExclude = null;
  if (reservationID) {
    const reservationToExclude = await prisma.reservation.findUnique({
      where: { id: reservationID },
    });
    reservedRoomIdToExclude = reservationToExclude ? reservationToExclude.room_id : null;
  }

  // 2. Fetch all reservations for the given date range, excluding the room of the specified reservation ID.
  let queryConditions = {
    AND: [
      {
        check_in_date: {
          lte: checkOutDate,
        },
      },
      {
        check_out_date: {
          gte: checkInDate,
        },
      },
    ],
  };

  // Add condition to exclude the specific room if reservationID is provided
  if (reservedRoomIdToExclude) {
    queryConditions.AND.push({
      id: {
        not: reservedRoomIdToExclude,
      },
    });
  }

  const reservations = await prisma.reservation.findMany({
    where: queryConditions,
  });

  const reservedRoomIds = reservations.map((r) => r.room_id);

  // 3. Filter out rooms that are reserved, but include the room associated with the provided reservationID.
  const availableRooms = allRoomsOfType.filter(
    (room) => !reservedRoomIds.includes(room.id) || room.id === reservedRoomIdToExclude
  );

  return availableRooms;
};


const checkAllReservationsByDate = async (value) => {
  let queryConditions = {
    AND: [
      {
        check_in_date: {
          lte: value.check_out_date,
        },
      },
      {
        check_out_date: {
          gte: value.check_in_date,
        },
      },
    ],
  };

  if (value.reservation_id) {
    queryConditions.AND.push({
      id: {
        not: value.reservation_id,
      },
    });
  }

  const reservations = await prisma.reservation.findMany({
    where: queryConditions,
  });

  return reservations;
};

const isRoomMaintaining = async (value) => {
  const room = await prisma.room.findFirst({
    where: {
      id: value.room_id,
    },
  });
  return room.isMaintaining;
};
