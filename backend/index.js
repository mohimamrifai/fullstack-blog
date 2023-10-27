// standart library
import express from "express";
import "dotenv/config.js";
import cors from "cors";

// module
import connection from "./connection.js";
import { pageNotFound } from "./middleware/pageNotFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { validationToken } from "./middleware/validationToken.js";
import routerPublic from "./routes/routesPublic.js";
import routerPrivat from "./routes/routesPrivate.js";

const app = express();
app.use(cors()); // middleware cors origin
app.use(express.json()); // middleware json parser
app.use("/api/v1", routerPublic); // routing public
app.use("/api/v1/admin", validationToken, routerPrivat); // routing privat
app.use(pageNotFound); // middleware pageNotFound
app.use(errorHandler); // middleware error handler

// listen server
app.listen(5000, () => {
  // conncet mongo db
  connection();
  console.log("server is running at https://localhost:5000");
});
