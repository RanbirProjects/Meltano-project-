const express = require('express');
const { body, validationResult } = require('express-validator');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

// POST /api/subscribe
router.post('/', [
  body('email').isEmail().withMessage('Please provide a valid email')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    
    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed!' });
    }
    
    const subscriber = new Subscriber({
      email
    });

    await subscriber.save();
    
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    console.error('Subscribe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 