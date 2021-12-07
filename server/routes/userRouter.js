const Router = require("express");
const router = new Router();

router.post("/signup");
router.post("/login");
router.get("/auth", (req, res) => res.json({ message: "All Working!" }));

module.exports = router;
