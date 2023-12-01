const express = require("express");
const app = express();
const path = require('path'); 
const hbs = require('hbs');
const collection = require('../src/mongodb');

const templatePath = path.join(__dirname, '../templates');

// app.use(express.static())

app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended: false}))
app.get("/", (req, res)=>{
   res.render('home')
})
app.get("/signin", (req, res)=>{
    res.render('login')
 })
app.get("/signup", (req, res)=>{
    res.render('signup')
 })
 
app.post("/signup", async (req, res) => {
    const userData = {
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        
    };

    try {
        
        // Create a new user using the User model
        const newUser = new collection(userData);

        // Save the user to the database
        await newUser.save();

        res.render("home");
    } catch (error) {
        // Handle any errors (e.g., validation errors)
        console.error(error);
        res.status(500).send("Internal Server Error", error);
    }
});
app.post("/signin", async (req, res) => {
    try {
        // Find a user with the provided username
        const user = await collection.findOne({ username: req.body.username });

        if (user) {
            // Check if the provided password matches the stored password
            const passwordMatch = user.password === req.body.password;

            if (passwordMatch) {
                res.render("home");
            } else {
                res.send('Password does not match');
            }
        } else {
            res.send('User not found');
        }
    } catch (error) {
        // Handle any errors
        res.send('please fill all the form');
    }
});


app.listen(3000, ()=>{
    console.log('port connected');
})