const User = require("../../models/User.js");
const UserSession = require("../../models/UserSession.js");
module.exports = app => {

    //Sign up
    app.post("/api/signup", (req, res, next) => {
        const { body } = req;
        const { 
            userName,
            password
        } = body;
        
        if (!userName) {
            return res.end({
                success: false,
                message: "Error: Username cannot be blank."
            });
        }

        if (!password) {
            return res.end({
                success: false,
                message: "Error: Password cannot be blank."
            });
        }

        username = username.toLowerCase();

        //verify username doesn't exist already
        //save

        User.find({
            username: username
        }, (err, previousUsers) => {
            if (err) {
                return res.end({
                    success: false,
                    message: "Error: Server error"
                });
            } else if (previousUsers.length > 0) {
                return res.end({
                    success: false,
                    message: "Error: Username already exists."
                });
                return res.end()
            } 

            //save new user
            const newUser = new User();

            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.end({
                        success: false,
                        message:"Error: Server error"
                    });
                }
                return res.end({
                    success: true,
                    message: "Signed Up"
                });
            });
        });
    });

    //Sign in
    app.post("/api/login", (req, res, next) => {
        const { body } = req;
        const { 
            password
        } = body;
        let {
            username
        } = body;
        
        if (!userName) {
            return res.end({
                success: false,
                message: "Error: Need username."
            });
        }

        if (!password) {
            return res.end({
                success: false,
                message: "Error: Need password."
            });
        }

        username = username.toLowerCase();

        User.find({
            username: username
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: "Error: server error"
                });
            }

            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: "Error: Invalid"
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: "Error: Invalid"
                });
            }

            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: "Error: server error"
                    });
                }

                return res.send({
                    success: true,
                    message: "Valid sign in",
                    token: doc._id
                });
            });

        })
    });

}