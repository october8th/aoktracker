const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/aoktracker"
);

const aokSeed = [
    {
        image: "https://www.usatoday.com/story/travel/advice/2017/03/26/safe-driving/99575482/",
        title: "Driver Let Me Merge",
        link: "This is another  link.",
        story: "Another driver let me merge when the lane was about to end; this inspired me to be a more patient driver.",
        saved: true
    },

    {
        image: "http://www.valleynewslive.com/content/news/Target-to-roll-out-same-day-delivery-in-Twin-Cities-473826743.html",
        title: "Stranger Held the Door Open for Me and My Kids",
        link: "This is another link",
        story: "I was struggling with my kids climbing all over the cart, when a kind stranger held the door open for me.  This inspired me to be a kinder parent that day.",
        saved: true
    },

    {
        image: "http://time.com/4290598/starbucks-rewards-program/",
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