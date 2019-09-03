import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { PORT, MONGO_URI } from "./config/keys";

import routes from "./routes";

// Connect to database and set up app
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const app = express();

// Use body parser to parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

// Connect the routes to the Express server
app.use("/", routes);

// Run the server
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
