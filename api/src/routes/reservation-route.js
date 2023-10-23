const express = require('express');
const reservationController = require('../controllers/reservation-controller')
const authenticateMiddleware = require('../middlewares/authenticate');
const router = express.Router();

router.post('/create-reservation', authenticateMiddleware, reservationController.createReservation)
router.post('/update-room-maintaining', authenticateMiddleware, reservationController.updateRoomMaintaining)
router.post('/get-room-availability', authenticateMiddleware, reservationController.getRoomsAvailable)
router.get('/get-reservations', authenticateMiddleware, reservationController.getAllReservations)
router.get('/get-reservations-by-user', authenticateMiddleware, reservationController.getReservationsByUser)
router.post('/cancel-reservation', authenticateMiddleware, reservationController.cancelReservation)
router.get('/get-reservation-id', authenticateMiddleware, reservationController.getReservationById)
router.post('/change-reservation', authenticateMiddleware, reservationController.changeReservation)

module.exports = router;