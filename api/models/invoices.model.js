/** @format */

const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
	invoiceName: String,
	invoiceType: String,
	invoiceAmount: String,
	invoiceIssueDate: Date,
	invoiceStatus: String,
});

const invoiceModel = mongoose.model("Invoices", invoiceSchema);

mongoose.exports = invoiceModel;
