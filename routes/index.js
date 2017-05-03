const express = require('express');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: './public/uploads/' });

const Picture = require('../models/pictures');

/* GET home page. */
router.get('/', (req, res, next) => {
  Picture.find((err, pictures) => {
    console.log(pictures);
    return res.render('index', { pictures });
  });
});

router.post('/upload', upload.single('photo'), (req, res) => {
  const pic = new Picture({
    name: req.body.name,
    pic_path: `/uploads/${req.file.filename}`,
    pic_name: req.file.originalname,
  });

  pic.save((err) => {
    res.redirect('/');
  });
});


module.exports = router;
