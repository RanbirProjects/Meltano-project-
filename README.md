# Meltano-Inspired Website

A modern, responsive website inspired by Meltano's design philosophy, built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
Home Page
![E1E73703-F777-4F63-A3AE-6E1D884367B9](https://github.com/user-attachments/assets/cffddd57-6507-47d2-8bb9-90ac20defed0)
Features
![F8D79BF5-5C60-4BAB-B868-D7EB8590B3C7](https://github.com/user-attachments/assets/99c84fbe-8018-4c8f-8bc3-fc1957fff758)
About
![561C7F54-8D2E-4FB0-B202-DEB6431CA4AA](https://github.com/user-attachments/assets/844b9ade-99fb-412e-af3e-749082099a98)
Pricing 
![83A47117-0987-40FA-BBCB-F54B65731842](https://github.com/user-attachments/assets/9a5b83b8-31ee-4bd8-a938-e764cfe90882)
Demo
![4CFBCCAF-A4DE-4D69-AE2C-A85366022FE3](https://github.com/user-attachments/assets/83579451-8442-4532-9247-49413ce53c37)
Contact
![7AB7DBC5-F346-4FA3-ABBA-17C7A174A4B9](https://github.com/user-attachments/assets/2806efe7-cfb1-49be-97f4-21b12edc26b2)

## 🌟 Features

- **Light Lavender Design**: Beautiful gradient backgrounds with playful animations
- **Concise Messaging**: Clear, skimmable copy that conveys complex ideas simply
- **Smooth Animations**: Subtle animations that guide users through the platform
- **Responsive Design**: Fully responsive across all devices
- **Interactive Forms**: Contact form and newsletter subscription with backend integration
- **Modern UI/UX**: Glass morphism effects and modern design patterns
- **Interactive Pricing**: Monthly/yearly toggle with animated pricing cards
- **Customer Testimonials**: Auto-rotating carousel with customer reviews
- **Live Demo Section**: Interactive code preview with syntax highlighting
- **Blog API**: Complete blog management system with MongoDB
- **Loading Animations**: Beautiful gradient loading spinners
- **Scroll to Top**: Smooth scroll-to-top functionality
- **Advanced Navigation**: Enhanced navbar with smooth scrolling

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **React Intersection Observer** - Scroll animations

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd meltano-inspired-website
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/meltano-website
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret_here
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system or use a cloud instance.

6. **Run the application**

   **Development mode (both frontend and backend):**
   ```bash
   npm run dev
   ```

   **Or run separately:**
   
   Backend only:
   ```bash
   npm run server
   ```
   
   Frontend only:
   ```bash
   npm run client
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🏗️ Project Structure

```
meltano-inspired-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Features.js
│   │   │   ├── About.js
│   │   │   ├── Pricing.js
│   │   │   ├── Testimonials.js
│   │   │   ├── Demo.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── ScrollToTop.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── models/                 # MongoDB models
│   ├── Contact.js
│   ├── Subscriber.js
│   └── Blog.js
├── routes/                 # API routes
│   ├── contact.js
│   ├── subscribe.js
│   └── blog.js
├── server.js              # Express server
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary**: Light lavender gradients (#E6E6FA to #F0F8FF)
- **Accent**: Purple gradients (#667eea to #764ba2)
- **Text**: Dark gray (#2D3748)
- **Background**: Soft whites and transparent overlays

### Animation Features
- Floating cards with staggered animations
- Smooth scroll-triggered animations
- Hover effects with micro-interactions
- Glass morphism effects
- Gradient text animations
- Interactive pricing toggle
- Auto-rotating testimonials carousel
- Code preview with copy functionality

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear heading and body text contrast

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Body: `{ name, email, message }`
  - Response: Success/error message

### Newsletter Subscription
- **POST** `/api/subscribe`
  - Body: `{ email }`
  - Response: Success/error message

### Blog Management
- **GET** `/api/blog` - Get all blog posts (with pagination, filtering)
- **GET** `/api/blog/:slug` - Get single blog post
- **POST** `/api/blog` - Create new blog post
- **PUT** `/api/blog/:id` - Update blog post
- **DELETE** `/api/blog/:id` - Delete blog post

## 🆕 New Features Added

### 1. **Interactive Pricing Section**
- Monthly/yearly toggle with smooth animations
- Popular plan highlighting
- Animated price transitions
- Feature comparison lists

### 2. **Customer Testimonials Carousel**
- Auto-rotating testimonials
- Manual navigation controls
- Customer statistics display
- Smooth transitions between reviews

### 3. **Live Demo Section**
- Interactive code preview tabs
- Syntax highlighting
- Copy-to-clipboard functionality
- Multiple demo examples (Pipeline, API, Dashboard)

### 4. **Blog Management System**
- Complete CRUD operations for blog posts
- MongoDB integration
- Pagination and filtering
- SEO-friendly slugs

### 5. **Enhanced UI Components**
- Beautiful loading spinners with gradient animations
- Scroll-to-top button with glass morphism
- Improved navigation with smooth scrolling
- Enhanced responsive design

## 🚀 Deployment

### Heroku Deployment
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Connect your GitHub repository
4. Deploy automatically on push to main branch

### Vercel Deployment (Frontend)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `client/build`
4. Deploy

### MongoDB Atlas (Database)
1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Update `MONGODB_URI` in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Meltano's](https://meltano.com) beautiful design and user experience
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support, email hello@meltano.com or create an issue in this repository. # Meltano-project-
