const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  notes:{
    type:Schema.Types.ObjectId,
    ref:"Note"
  }
});

const Category = mongoose.model("Category", categoriesSchema);

module.exports = Category;
