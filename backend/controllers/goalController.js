const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
	res.json({ msg: 'Get goals' });
});

// @desc Set goal
// @route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}

	res.json({ msg: 'Set goal' });
});

// @desc Update goal
// @route PUT /api/goals:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
	res.json({ msg: `Update goal ${req.params.id}` });
});

// @desc Delete goal
// @route GET /api/goals:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
	res.json({ msg: `Delete goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
