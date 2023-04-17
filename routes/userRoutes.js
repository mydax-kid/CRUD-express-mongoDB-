const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const { registerUser,
        currentUser,
        loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser); //single protected route

module.exports = router;







// router.use(validateToken) Will protect all the routes
