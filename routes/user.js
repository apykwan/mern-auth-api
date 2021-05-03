const express = require('express');

// import controllers
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { read, update } = require('../controllers/user');

const router = express.Router();

router.get('/:id', requireSignin, read);
router.put('/update/:id', requireSignin, update);
router.put('/admin/:id', requireSignin, adminMiddleware, update);

module.exports = router;