-- CreateTable
CREATE TABLE "Coupon" (
    "counponId" TEXT NOT NULL,
    "couponCode" TEXT NOT NULL,
    "couponName" TEXT NOT NULL,
    "couponPercentageDiscount" DOUBLE PRECISION NOT NULL,
    "couponAmountDiscount" DOUBLE PRECISION NOT NULL,
    "couponLimit" INTEGER NOT NULL,
    "couponExpiredDate" TIMESTAMP(3) NOT NULL,
    "couponIsFullyUsed" BOOLEAN NOT NULL,
    "isPublic" BOOLEAN NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("counponId")
);

-- CreateTable
CREATE TABLE "Employee" (
    "employeeCode" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "employeeFirstName" TEXT NOT NULL,
    "employeeLastName" TEXT NOT NULL,
    "employeeSalary" DOUBLE PRECISION NOT NULL,
    "employeeDepartmentId" TEXT NOT NULL,
    "employeePositionId" TEXT NOT NULL,
    "employeePassword" TEXT NOT NULL,
    "employeePin" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employeeCode")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderId" TEXT NOT NULL,
    "orderNetPrice" DOUBLE PRECISION NOT NULL,
    "orderDiscount" DOUBLE PRECISION NOT NULL,
    "orderBasePrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "orderProductId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productAmount" INTEGER NOT NULL,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("orderProductId")
);

-- CreateTable
CREATE TABLE "OrderUsedCoupon" (
    "orderUsedCouponId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,
    "orderUsedCouponDiscount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrderUsedCoupon_pkey" PRIMARY KEY ("orderUsedCouponId")
);

-- CreateTable
CREATE TABLE "ProductTag" (
    "productTagId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductTag_pkey" PRIMARY KEY ("productTagId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "tagId" TEXT NOT NULL,
    "tagName" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tagId")
);

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
