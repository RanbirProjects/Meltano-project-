const express = require('express');
const { body, validationResult } = require('express-validator');
const Blog = require('../models/Blog');
const router = express.Router();

// GET /api/blog - Get all blog posts
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, tag, featured } = req.query;
    
    let query = {};
    
    if (tag) {
      query.tags = { $in: [tag] };
    }
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    const posts = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    
    const total = await Blog.countDocuments(query);
    
    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/blog/:slug - Get single blog post
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug });
    
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Blog post fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/blog - Create new blog post (Admin only)
router.post('/', [
  body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters long'),
  body('slug').trim().isLength({ min: 3 }).withMessage('Slug must be at least 3 characters long'),
  body('excerpt').trim().isLength({ min: 10 }).withMessage('Excerpt must be at least 10 characters long'),
  body('content').trim().isLength({ min: 50 }).withMessage('Content must be at least 50 characters long'),
  body('author.name').trim().isLength({ min: 2 }).withMessage('Author name must be at least 2 characters long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, slug, excerpt, content, author, tags, featured, readTime } = req.body;
    
    // Check if slug already exists
    const existingPost = await Blog.findOne({ slug });
    if (existingPost) {
      return res.status(400).json({ message: 'Blog post with this slug already exists' });
    }
    
    const post = new Blog({
      title,
      slug,
      excerpt,
      content,
      author,
      tags: tags || [],
      featured: featured || false,
      readTime: readTime || 5
    });

    await post.save();
    
    res.status(201).json(post);
  } catch (error) {
    console.error('Blog creation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/blog/:id - Update blog post
router.put('/:id', [
  body('title').optional().trim().isLength({ min: 5 }),
  body('excerpt').optional().trim().isLength({ min: 10 }),
  body('content').optional().trim().isLength({ min: 50 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const post = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /api/blog/:id - Delete blog post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Blog deletion error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 