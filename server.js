const express = require('express')
const connectDB = require('./config/db')
const path = require('path');
const app = express()

//connect to database 
connectDB()

//Init Middlewares
app.use(express.json({ extended: false }))

// define routes
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/guests', require('./routes/guests'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started at port ${PORT}`))