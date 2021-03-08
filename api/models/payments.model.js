/** @format */

const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
	paymentName: String,
	paymentType: String,
	paymentAmount: String,
	paymentIssueDate: Date,
	paymentStatus: String,
});

const paymentModel = mongoose.model("Payments", paymentSchema);

mongoose.exports = paymentModel;
