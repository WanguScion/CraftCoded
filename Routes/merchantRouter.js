const express = require("express");
const { merchantRegister } = require("../Controllers/merchantController");

const merchantRouter = express.Router();

merchantRouter.post("/register", merchantRegister);
// vendorRouter.post("/loginWemail", vendorLoginWEmail);
// vendorRouter.post("/loginWmerchantID", vendorLoginWMerchantID);

module.exports = {
    merchantRouter
};
