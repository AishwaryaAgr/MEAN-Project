/** @format */

const mongoose = require("mongoose");

const auditSchema = mongoose.Schema({
	auditName: String,
	auditType: String,
	auditAmount: String,
	auditIssueDate: Date,
	auditStatus: String,
});

const auditModel = mongoose.model("Audits", auditSchema);

mongoose.exports = auditModel;
