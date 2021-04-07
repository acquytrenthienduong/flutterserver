import express from "express";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
import cors from "cors";
import pkg1 from "mongoose";
const { connect } = pkg1;

import mainRoutes from "./server/routes/main";

const app = express();

const uri =
  "mongodb+srv://anhdhq:quangdaica@cluster0.07pd2.mongodb.net/Cluster0?retryWrites=true&w=majority";

app.use(cors());

app.use(json());
app.use("/api/", mainRoutes);

app.use(urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
