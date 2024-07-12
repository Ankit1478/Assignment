const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const feedbackRoutes = require('./routes/feedback');
const path = require('path');
require('dotenv').config();
require('./config/passport');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/feedback', feedbackRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
