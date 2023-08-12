const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const CustomerSchema = new mongoose.Schema({
    name: {
      type:String, 
      required:true
    },
    address:String,
    phone:String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps:true
  }
);

CustomerSchema.plugin(mongoose_delete,{overrideMethods:'all'});
const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer