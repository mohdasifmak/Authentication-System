const express = require("express");
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require("mongoose");
const User = require("./models/user");




const MONGO_URL = 'mongodb://127.0.0.1:27017/authenticationSystem';

async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("Database Connected");
}).catch(err => {
    console.log(err);
})


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: "email" }, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());



app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');  // For Passport errors, if needed
    next();
});



app.get("/signup", (req, res) => {
    res.render("signup"); 
});


app.post("/signup", async (req, res) => {
    const { name, email, dob, phone, password } = req.body;
    try {
        const user = new User({ name, email, dob, phone });
        await User.register(user, password);
        req.flash("success_msg", "Registration successful. You can now log in.");
        res.redirect("/login");
    } catch (err) {
        req.flash("error_msg", err.message);
        res.redirect("/signup");
    }
});


app.get("/login", (req, res) => {
    res.render("login"); 
});



app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            req.flash("error_msg", "An error occurred during login.");
            return res.redirect("/login");
        }
        if (!user) {
            console.log("Flash message set: Invalid email or password.");
            req.flash("error_msg", info.message || "Invalid email or password.");
            return res.redirect("/login");
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error("Error during session login:", err);
                req.flash("error_msg", "An error occurred during session login.");
                return res.redirect("/login");
            }
            req.flash("success_msg", "You have successfully logged in!");
            return res.redirect("/login");
        });
    })(req, res, next);
});




app.get("/logout", (req, res) => {
    req.logout(() => {
        req.flash("success_msg", "You are logged out.");
        res.redirect("/login");
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
