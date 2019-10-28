const express = require('express');
const router = express.Router();
const room = require('../controllers/room.controller')

router.get('/rooms', room.getRooms);
router.post('/rooms', room.createRoom);
router.get('/rooms/:id', room.getRoom);
router.delete('/rooms:id', room.deleteRoom);
router.patch('/rooms/:id', room.updateRoom);


module.exports = router;