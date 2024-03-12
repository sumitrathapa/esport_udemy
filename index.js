import express from "express";
import connectDB from "./connect.db.js";
import courseRoutes from "./course/course.route.js";

const app = express();

// to make app understand json
app.use(express.json());

//connect database
connectDB();

//register routes
app.use(courseRoutes);

//server and port
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
