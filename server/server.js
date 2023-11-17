
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user')
// express app
const app = express();
const cors = require('cors');

app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
// middleware
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        const PORT = process.env.PORT_ENV || 4001;
        app.listen(PORT, () => {
            console.log('Connected to DB & listening on port ' + PORT);
        });
    })
    .catch((err) => console.log(err))


