const express = require("express");

const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "./public/uploads/" });

const Picture = require("../models/pictures");

/* GET home page. */
router.get("/", (req, res, next) => {
  Picture.find((err, pictures) => {
    if (err) {
      next(err);
    } else {
      console.log(pictures);
      const data = {
        pictures: pictures
      };
      return res.render("index", data);
    }
  });
});

router.post("/upload", upload.single("photo"), (req, res, next) => {
  const pic = new Picture({
    name: req.body.name,
    pic_path: `/uploads/${req.file.filename}`,
    pic_name: req.file.originalname
  });

  pic.save(err => {
    if (err) {
      next(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
