var mongoose = require("mongoose");
var coursesSchema = mongoose.Schema({
	name: String,
	id: String,
	duration: Number,
	fee: Number,
});
const courseSchema = mongoose.model("courses", coursesSchema);

module.exports = courseSchema;
