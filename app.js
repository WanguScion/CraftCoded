//imports
const env = require("dotenv");
env.config();
const express = require("express");
const { merchantRouter } = require("./Routes/merchantRouter");

//declarations
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/vendor/", merchantRouter);

console.log(process.env.DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
