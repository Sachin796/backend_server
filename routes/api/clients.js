const router = require("express").Router();
const { Client } = require("../../models/client");

router.get("/", async (req, res) => {
  try {
    const client = await Client.find();
    res.status(200).json({ data: client });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
