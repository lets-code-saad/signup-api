const express = require("express")
const connectionDB = require("./db/db")
const User = require("./models/user")

connectionDB()

const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const newUser = User({ firstName, lastName, email, password })

    await newUser.save()

    res.status(201).json({message:"User Created Successfully", newUser})

})

app.listen(3000, () => {
    console.log("Hello Sir")
})