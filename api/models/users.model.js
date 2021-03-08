/** @format */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	userName: String,
	userType: String,
	userAmount: String,
	userIssueDate: Date,
	userStatus: String,
});

const userModel = mongoose.model("Users", userSchema);

mongoose.exports = userModel;
