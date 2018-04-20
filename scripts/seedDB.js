const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/aoktracker"
);

const aokSeed = [
    {
        image: "https://www.gannett-cdn.com/-mm-/7aaa49970bb60c0d92558d7c475844384f26f2b1/c=0-0-1881-1414&r=x404&c=534x401/local/-/media/2017/03/24/USATODAY/USATODAY/636259464567014130-GettyImages-621601764.jpg",
        title: "Driver Let Me Merge",
        link: "This is another  link.",
        story: "Another driver let me merge when the lane was about to end; this inspired me to be a more patient driver.",
        saved: true
    },

    {
        image: "http://media.graytvinc.com/images/810*455/target+pic+sf1.jpg",
        title: "Stranger Held the Door Open for Me and My Kids",
        link: "This is another link",
        story: "I was struggling with my kids climbing all over the cart, when a kind stranger held the door open for me.  This inspired me to be a kinder parent that day.",
        saved: true
    },

    {
        image: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2016%2F04%2Fstarbucks.jpeg&w=800&q=85",
        title: "Someone bought my coffee!",
        link: "This is a link",
        story: "When I was cranky and waiting in line at the Starbucks drive-thru, someone ahead of me paid for my coffee; this inspired me to pay for the person behind me and really made my day so much better!",
        saved: true
    }
];

db.Aok
    .remove({})
    .then(() => db.Aok.collection.insertMany(aokSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });