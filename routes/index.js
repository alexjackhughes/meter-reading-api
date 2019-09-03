import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", function(req, res) {
  res.send({ hello: "world" });
});

export default router;
