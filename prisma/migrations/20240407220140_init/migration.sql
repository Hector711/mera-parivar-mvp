-- CreateTable
CREATE TABLE "subject_type" (
    "IDsubject_type" INTEGER NOT NULL,
    "subject_name" TEXT NOT NULL,

    CONSTRAINT "subject_type_pkey" PRIMARY KEY ("IDsubject_type")
);

-- CreateTable
CREATE TABLE "Donation_type" (
    "IDdonation_type" INTEGER NOT NULL,
    "donation_name" TEXT NOT NULL,

    CONSTRAINT "Donation_type_pkey" PRIMARY KEY ("IDdonation_type")
);

-- CreateTable
CREATE TABLE "Method_pay" (
    "IDmethod_pay" INTEGER NOT NULL,
    "method_pay_name" TEXT NOT NULL,

    CONSTRAINT "Method_pay_pkey" PRIMARY KEY ("IDmethod_pay")
);

-- CreateTable
CREATE TABLE "contact_form" (
    "IDcontact" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "IDSubject_type" INTEGER NOT NULL,

    CONSTRAINT "contact_form_pkey" PRIMARY KEY ("IDcontact")
);

-- CreateTable
CREATE TABLE "Benefactors" (
    "IDBenefactor" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Donation_frequency" BOOLEAN NOT NULL,
    "Registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Subscription_status" BOOLEAN NOT NULL,
    "is_partner" BOOLEAN NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_role" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Benefactors_pkey" PRIMARY KEY ("IDBenefactor")
);

-- CreateTable
CREATE TABLE "Donations" (
    "IDDonacion" TEXT NOT NULL,
    "Amount_in_rup" BIGINT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "IDBenefactor" TEXT NOT NULL,
    "IDmethod_pay" INTEGER NOT NULL,
    "IDdonation_type" INTEGER NOT NULL,

    CONSTRAINT "Donations_pkey" PRIMARY KEY ("IDDonacion")
);

-- AddForeignKey
ALTER TABLE "contact_form" ADD CONSTRAINT "contact_form_IDSubject_type_fkey" FOREIGN KEY ("IDSubject_type") REFERENCES "subject_type"("IDsubject_type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donations" ADD CONSTRAINT "Donations_IDBenefactor_fkey" FOREIGN KEY ("IDBenefactor") REFERENCES "Benefactors"("IDBenefactor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donations" ADD CONSTRAINT "Donations_IDmethod_pay_fkey" FOREIGN KEY ("IDmethod_pay") REFERENCES "Method_pay"("IDmethod_pay") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donations" ADD CONSTRAINT "Donations_IDdonation_type_fkey" FOREIGN KEY ("IDdonation_type") REFERENCES "Donation_type"("IDdonation_type") ON DELETE RESTRICT ON UPDATE CASCADE;
