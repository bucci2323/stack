const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "pug");

// app.set("views", path.resolve("./src/views"))
const userRouter = require('./src/routers/user')
const questionRouter = require('./src/routers/questions')
const answerComment = require('./src/routers/answer_comment')
const answerRouter = require("./src/routers/answer")
const question_comments = require('./src/routers/question_comments')
const errorHandler = require('./src/middleware/errorHandler')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(question_comments)
app.use(userRouter)
app.use(questionRouter)
app.use(answerRouter)
app.use(answerComment)



const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

// // db connection
require("./src/Database/connection");
const port = process.env.PORT 
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is up on port  ${port}`)



})

app.use(bodyParser.urlencoded({ 
    extended: true 
}));


