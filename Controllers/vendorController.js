const bcrypt = require("bcryptjs");
const prisma = require("../db/dbConfig");

const vendorRegister = async (req, res) => {
    //bad request check
    const { merchantName, email, password } = req.body;
    if (!merchantName || !email || !password) {
        return res.json({ status: 400, body: { message: "Incomplete credentials!" } });
    }

    //credential existence in db check
    const findMerchant = await prisma.merchant.findFirst({
        where: {email: email}
    });
    if (findMerchant) {
        return res.json({ status: 409, body: { message: "Client with same credentials already exists!" } });
    }

    //insert new Merchant in db
    const salt = bcrypt.gensaltsync(7);
    const pwHash = await bcrypt.hash(password, salt);
    prisma.merchant.create({
        data: {
            merchantName: merchantName,
            email: email,
            password: pwHash
        }
    });
    return res.json({ status: 201, body: { message: "Created." } });
};

module.exports = {
    vendorRegister,
    vendorLogin
};
