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

exports.getRoomsAvailable = async (req, res, next) => {
  // Check for user authentication
  if (!req.user) {
    return res.status(401).json({ message: "unauthenticated" });
  }

  try {
    // Validate request body
    const { value, error } = getReservationSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // Retrieve reservations and all rooms
    const reservations = await checkAllReservationsByDate(value);
    const rooms = await prisma.room.findMany();

    // Initialize available rooms count by type
    const roomsAvailable = {
      Cozy: 0,
      Chillout: 0,
      Party: 0,
    };

    // Count rooms that are not under maintenance
    rooms.forEach((room) => {
      if (!room.isMaintaining) {
        roomsAvailable[room.type]++;
      }
    });

    reservations.forEach((reservation) => {
      // Find the associated room for the reservation using room_id
      const associatedRoom = rooms.find(
        (room) => room.id === reservation.room_id
      );

      if (associatedRoom && !associatedRoom.isMaintaining) {
        roomsAvailable[associatedRoom.type]--;
      }
    });

    // Respond with available rooms count
    res.status(200).json({ roomsAvailable });
  } catch (err) {
    next(err);
  }
};

// getUserReservations

// getReservationsByAdmin

const checkReservationsByDateAndRoomID = async (value) => {
  const reservations = await prisma.reservation.findMany({
    where: {
      check_in_date: {
        gte: value.check_in_date,
      },
      check_out_date: {
        lte: value.check_out_date,
      },
      room_id: value.room_id,
    },
  });
  return reservations;
};

const getAvailableRoomsByRoomType = async (type, checkInDate, checkOutDate) => {
  // 1. Fetch all rooms of a given type.
  const allRoomsOfType = await prisma.room.findMany({
    where: {
      type: type,
      isMaintaining: false,
    },
  });

  // 2. Fetch all reservations for the given date range.
  const reservations = await prisma.reservation.findMany({
    where: {
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
    },
  });

  const reservedRoomIds = reservations.map((r) => r.room_id);

  // 3. Filter out rooms that are reserved.
  const availableRooms = allRoomsOfType.filter(
    (room) => !reservedRoomIds.includes(room.id)
  );

  return availableRooms;
};

const checkAllReservationsByDate = async (value) => {
  const reservations = await prisma.reservation.findMany({
    where: {
      check_in_date: {
        gte: value.check_in_date,
      },
      check_out_date: {
        lte: value.check_out_date,
      },
    },
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
