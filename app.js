const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const index = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const db = require("./config/mongoose-connection");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// app.use("/", (req, res) => {
//   res.send("Home route");
// })

app.use('/index', index)
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(3000); 
