/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Benefactors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Benefactors_email_key" ON "Benefactors"("email");
