const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
//@access Private
const getGoals = async (req, res) => {
	res.json({ msg: 'Get goals' });
};

// @desc Set goal
// @route POST /api/goals
//@access Private
const setGoal = async (req, res) => {
    if (!req.body.text)  {
        res.status(400) 
        throw new Error( 'Please add a text field')
    }

	res.json({ msg: 'Set goal' });
};

// @desc Update goal
// @route PUT /api/goals:id
//@access Private
const updateGoal = async (req, res) => {
	res.json({ msg: `Update goal ${req.params.id}` });
};

// @desc Delete goal
// @route GET /api/goals:id
//@access Private
const deleteGoal = async (req, res) => {
	res.json({ msg: `Delete goal ${req.params.id}` });
};

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
