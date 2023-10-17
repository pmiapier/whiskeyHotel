const express = require('express');
const reservationController = require('../controllers/reservation-controller')
const authenticateMiddleware = require('../middlewares/authenticate');
const router = express.Router();

router.post('/create-reservation', authenticateMiddleware, reservationController.createReservation)
router.post('/update-room-maintaining', authenticateMiddleware, reservationController.updateRoomMaintaining)
router.get('/check-room-availability', authenticateMiddleware, reservationController.checkRoomAvailability)
router.get('/get-reservations', authenticateMiddleware, reservationController.getAllReservations)

module.exports = router;