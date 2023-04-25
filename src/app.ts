import express = require("express");
import bodyParser = require("body-parser");

import { port } from "./config";
import { db } from "./mongo-db";

const app = express();
app.use(bodyParser.json());

app.get("/user/me", async (req, res) => {
  try {
    const user = await db
      .collection("users")
      .findOne({ email: "user@example.com" });
    if (!user) {
      return res.status(404).json({ status: "Not Found" });
    }
    return res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
