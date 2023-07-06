import express from "express";
import connectDB from "./././mongodb/connection.js";
import bodyParser from "body-parser";
import courserouters from "./routes/courses.routes.js";
import quizzrouters from "./routes/quizz.routes.js";
import userrouters from "./routes/user.routes.js";
import enrollmentrouters from "./routes/enroll.routes.js"
import employeerouter from "./routes/employee.routes.js";
import cors from 'cors';
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// calling routes
app.use("/courses", courserouters);
app.use('/quizz',quizzrouters);
app.use('/user',userrouters);
app.use('/enrollment', enrollmentrouters);
app.use('/employee',employeerouter);


const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () => console.log("Server started on port 5000 "));
  } catch (error) {
    console.log(error);
  }
};

startServer();
