const router = require("express").Router();
const { Student } = require("../../models/student");

router.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).send({ data: student });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
