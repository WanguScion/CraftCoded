-- CreateTable
CREATE TABLE "merchant" (
    "merchantName" TEXT NOT NULL,
    "merchantID" SERIAL NOT NULL,
    "registeredEmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "merchant_pkey" PRIMARY KEY ("merchantID")
);

-- CreateTable
CREATE TABLE "product" (
    "productName" TEXT NOT NULL,
    "productID" SERIAL NOT NULL,
    "GS1String" TEXT NOT NULL,
    "mID" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("productID")
);

-- CreateTable
CREATE TABLE "supplier" (
    "supplierName" TEXT NOT NULL,
    "supplierID" SERIAL NOT NULL,
    "Material" TEXT NOT NULL,
    "pID" INTEGER NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("supplierID")
);

-- CreateIndex
CREATE UNIQUE INDEX "merchant_registeredEmail_key" ON "merchant"("registeredEmail");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_mID_fkey" FOREIGN KEY ("mID") REFERENCES "merchant"("merchantID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier" ADD CONSTRAINT "supplier_pID_fkey" FOREIGN KEY ("pID") REFERENCES "product"("productID") ON DELETE RESTRICT ON UPDATE CASCADE;
