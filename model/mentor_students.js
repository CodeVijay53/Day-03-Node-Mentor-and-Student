const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  mentor_id: Number,
  mentor_name: String,
  Email: String,
  PhoneNumber: Number,
  Courses: String,
});

const StudentSchema = new Schema({
  Student_id: Number,
  Student_name: String,
  Email: String,
  PhoneNumber: Number,
  Courses: String,
  mentor_id: Number,
});

const Mentor = mongoose.model("Mentor", MentorSchema);
const Student = mongoose.model("Student", StudentSchema);

module.exports = {
  Mentor,
  Student,
};
