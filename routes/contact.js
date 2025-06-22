const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const router = express.Router();

// POST /api/contact
router.post('/', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();
    
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 