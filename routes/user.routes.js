const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller')
const room = require('../controllers/room.controller')


//Users
router.get('/users', user.getUsers);
router.post('/users', user.createUser);
router.get('/users/:id', user.getUser);
router.delete('/users/:id', user.deleteUser);
router.patch('/users/:id', user.updateUser);

//Rooms
router.get('/rooms', room.getRooms);
router.post('/rooms', room.createRoom);
router.get('/rooms/:id', room.getRoom);
router.delete('/rooms', room.deleteRoom);
router.patch('/rooms/:id', room.updateRoom);


module.exports = router;