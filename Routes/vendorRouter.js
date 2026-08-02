const express = require("express");
const { vendorRegister, vendorLoginWEmail, vendorLoginWMerchantID } = require("../Controllers/vendorController");

const vendorRouter = express.Router();

vendorRouter.post("/register", vendorRegister);
vendorRouter.post("/loginWemail", vendorLoginWEmail);
vendorRouter.post("/loginWmerchantID", vendorLoginWMerchantID);

module.exports = {
    vendorRouter
};
