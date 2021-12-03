// import express
const express = require("express");
const app = express();

//Parse URL-encoded bodies-Allows us to retrieve data from submitted data
app.use(express.urlencoded({extended:true}));

//import cors
var cors = require("cors");

app.use(cors());

//import the harperdb instance
const db = require("./dbconfig");

// set your preferred server port
const port = 3000;

// 1. create your post route that handles creating new todo item

app.post("/add", async (req, res) => {

    // 2. retrieve the todo from req.body

    // 3. Validate the todo to nsure the user does not submit an empty form

    if (!req.body.todo || req.body.todo === "") {

        res.status(400).send("Todo is required");

    } else {

        // 4. prepare the todo in an object

        const option = {

            todo: req.body.todo,

            status: "pending",

        };

        // 5. ensure to catch the error using try/catch

        try {

            // 6. if the todo is not empty

            const response = await db.insert({

                table: "items",

                records: [option],

            });

            // 7. notify the frontend or sender with the success response

            res.status(200).send(response);

        } catch (error) {

            // 7. notify the frontend or sender with the error response

            res.status(500).send(error);

        }

    }

});

// just a notification in the console

app.listen(port, () => {

    console.log(`Your server ⚡ is running 🏃‍♂️ on http://localhost:${port}`);

});