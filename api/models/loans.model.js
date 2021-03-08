/** @format */

const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
	loanName: String,
	loanType: String,
	loanAmount: String,
	loanIssueDate: Date,
	loanStatus: String,
});

const loanModel = mongoose.model("Loans", loanSchema);

mongoose.exports = loanModel;
