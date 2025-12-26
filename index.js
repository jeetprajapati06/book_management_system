const express = require("express");
const db = require("./Db/connect");

const app = express();

app.set("view engine", "ejs");
db();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
const bookRoutes = require("./routes/routes");
app.use("/", bookRoutes);

app.listen(3000, (err) => {
    if (!err) {
        console.log("Server started on port 3000");
    } else {
        console.log(err);
    }
});
