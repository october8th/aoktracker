var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var DaokSchema = new Schema({
  // `iamge` is required and of type String
  howMany: {
    type: Number,
    required: true
  } ,
  title: {
    type: String,
    default: "counter"
  },
  completed: [
    {
      userid: String,
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Daok = mongoose.model("Daok", DaokSchema);

// Export the Article model
module.exports = Daok;
