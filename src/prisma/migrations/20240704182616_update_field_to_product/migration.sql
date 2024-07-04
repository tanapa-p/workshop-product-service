-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_updatedBy_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "updatedBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
