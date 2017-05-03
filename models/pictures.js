const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  name: String,
  pic_path: String,
  pic_name: String,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.exports = mongoose.model('Picture', pictureSchema);

