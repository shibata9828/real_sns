const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

// DB接続
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connecting DB .....")
    })
    .catch((err) => {
        console.log(err);
});

// ミドルウェア
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

app.listen(PORT, () => console.log("Server Started"));