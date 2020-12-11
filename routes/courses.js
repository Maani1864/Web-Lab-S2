var express = require("express");
var router = express.Router();
var courseModel = require("../models/course");
/* GET home page. */
router.get("/", async function (req, res, next) {
	let course = await courseModel.find();
	console.log(req.session.user);
	res.render("courses/list", { title: "EDUREKA COURSE LIST", courses: course });
});
router.get("/add", async function (req, res, next) {
	res.render("courses/add");
});
router.post("/add", async function (req, res, next) {
	let course = new courseModel(req.body);
	await course.save();
	res.redirect("/courses");
});
router.get("/delete/:id", async function (req, res, next) {
	let course = await courseModel.findByIdAndDelete(req.params.id);
	res.redirect("/courses");
});
router.get("/update/:id", async function (req, res, next) {
	let course = await courseModel.findById(req.params.id);
	res.render("courses/update", { course });
});
router.post("/update/:id", async function (req, res, next) {
	let course = await courseModel.findById(req.params.id);
	course.name = req.body.name;
	course.id = req.body.id;
	course.duration = req.body.duration;
	course.fee = req.body.fee;
	await course.save();
	res.redirect("/courses");
});
module.exports = router;
