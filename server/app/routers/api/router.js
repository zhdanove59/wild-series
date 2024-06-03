const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
// const { sayWelcome } = require("../../controllers/sayActions");

// router.get("/", sayWelcome);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const categoriesRouter = require("./categories/router")

router.use("/categories",categoriesRouter);

// const categoriesRouter = require("./categories/router");

// router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;