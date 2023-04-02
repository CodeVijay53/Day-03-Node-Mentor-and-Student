const express = require("express");

const dotenv = require("dotenv");

const mongo = require("./shared");

const mentor_student = require("./Router/Mentor_Student");

dotenv.config();

const app = express();

app.use(express.json());

mongo.connectMongoose();

app.use("/mentor", mentor_student);
app.use("/student", mentor_student);

app.listen(process.env.PORT);
