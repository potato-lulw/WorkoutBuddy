const express = require('express');
const router = express.Router();
const {getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const requireAuth = require("../middleware/requireAuth")

const Workout = require("../models/WorkoutModels")

router.use(requireAuth)

//* GET all workouts
router.get("/", getWorkouts);

//* GET a single workout
router.get("/:id", getWorkout);

//TODO POST
router.post("/", createWorkout)

//! DELETE
router.delete("/:id", deleteWorkout)

//? UPDATE
router.patch("/:id", updateWorkout)


module.exports = router;