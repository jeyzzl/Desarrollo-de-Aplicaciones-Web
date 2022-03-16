const express = require('express');
const fs = require('fs');
const router = express.Router();
const FriendController = require('../../controllers/friend');

//Get all friend
router.get('/', FriendController.findAll);

//Get single friend
router.get('/:id', FriendController.findById);

// //Get single friend by birthday
// router.get('/:birthday', FriendController.findByBirthday);

//Create new friend
router.post('/', FriendController.save);

//Update friend 
router.put('/:id', FriendController.update);

//Delete friend
router.delete('/:id', FriendController.deleteById);

module.exports = router;