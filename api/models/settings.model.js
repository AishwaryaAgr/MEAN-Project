/** @format */

const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
	settingName: String,
	settingType: String,
	settingAmount: String,
	settingIssueDate: Date,
	settingStatus: String,
});

const settingModel = mongoose.model("Settings", settingSchema);

mongoose.exports = settingModel;
