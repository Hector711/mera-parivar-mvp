/*
  Warnings:

  - The primary key for the `Benefactors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `IDBenefactor` column on the `Benefactors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Donations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `IDDonacion` column on the `Donations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `contact_form` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `IDcontact` column on the `contact_form` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `IDBenefactor` on the `Donations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Donations" DROP CONSTRAINT "Donations_IDBenefactor_fkey";

-- AlterTable
ALTER TABLE "Benefactors" DROP CONSTRAINT "Benefactors_pkey",
DROP COLUMN "IDBenefactor",
ADD COLUMN     "IDBenefactor" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Benefactors_pkey" PRIMARY KEY ("IDBenefactor");

-- AlterTable
ALTER TABLE "Donations" DROP CONSTRAINT "Donations_pkey",
DROP COLUMN "IDDonacion",
ADD COLUMN     "IDDonacion" BIGSERIAL NOT NULL,
DROP COLUMN "IDBenefactor",
ADD COLUMN     "IDBenefactor" BIGINT NOT NULL,
ADD CONSTRAINT "Donations_pkey" PRIMARY KEY ("IDDonacion");

-- AlterTable
ALTER TABLE "contact_form" DROP CONSTRAINT "contact_form_pkey",
DROP COLUMN "IDcontact",
ADD COLUMN     "IDcontact" BIGSERIAL NOT NULL,
ADD CONSTRAINT "contact_form_pkey" PRIMARY KEY ("IDcontact");

-- AddForeignKey
ALTER TABLE "Donations" ADD CONSTRAINT "Donations_IDBenefactor_fkey" FOREIGN KEY ("IDBenefactor") REFERENCES "Benefactors"("IDBenefactor") ON DELETE RESTRICT ON UPDATE CASCADE;
