const authRouter= require('express').Router()
const authCtrl = require("./auth.controller");
const loginChecker = require('./middleware');

authRouter.post("/register" ,authCtrl.registerUser)
authRouter.post("/login", authCtrl.loginUser);
authRouter.get("/dashboard", loginChecker, authCtrl.loggedInUser);

module.exports= authRouter;
