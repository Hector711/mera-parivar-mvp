/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Benefactors` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Donations" ALTER COLUMN "Amount_in_rup" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "Benefactors_email_key" ON "Benefactors"("email");
