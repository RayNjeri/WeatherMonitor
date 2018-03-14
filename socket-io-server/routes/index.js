const express = require('express');
const router = require('express').Router();

// router.get('/', (req, res) => {
//   res.send({ response: 'I Am Alive' }).status(200);
// });

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
