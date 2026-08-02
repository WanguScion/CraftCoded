//imports
const express = require("express");
const { vendorRouter } = require("./Routes/vendorRouter");

//declarations
const app = express();
const PORT = 3000;

app.use("/api/v1/vendor/", vendorRouter);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
