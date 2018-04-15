var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AokSchema = new Schema({
  // `iamge` is required and of type String
  image: {
    type: String,
    default: "http://www.culinaryservicesgroup.com/wp-content/uploads/2016/12/Kindness-Inspires-Kindness-low-res-768x458.jpg",
    required: false
  },
  // `title` is required and of type String
  title: {
    type: String,
    unique: true,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    default:"https://aoktracker.herokuapp.com/aoklist",
    required: false
  },
  inspiration: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now 
  },
  location: {
    type: String,
    required: false
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Aok = mongoose.model("Aok", AokSchema);

// Export the Article model
module.exports = Aok;
