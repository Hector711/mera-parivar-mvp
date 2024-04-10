CREATE TABLE `contact_form`(
    `IDcontact` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `contact_name` TEXT NOT NULL,
    `contact_email` TEXT NOT NULL,
    `IDSubject_type` INT NOT NULL,
    `Text` LONGTEXT NOT NULL
);
CREATE TABLE `Method_pay`(
    `IDmethod_pay` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `method_pay_name` TEXT NOT NULL
);
CREATE TABLE `Benefactors`(
    `IDBenefactor` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `email` MEDIUMTEXT NOT NULL,
    `name` TEXT NOT NULL,
    `Donation_frequency` TINYINT(1) NOT NULL,
    `Registration_date` DATE NOT NULL,
    `Subscription_status` TINYINT(1) NOT NULL,
    `is_partner` TINYINT(1) NOT NULL,
    `company_name` TEXT NOT NULL,
    `company_role` TEXT NOT NULL
);
CREATE TABLE `Donations`(
    `IDDonacion` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `IDBenefactor` BIGINT NOT NULL,
    `Amount_in_rup` BIGINT NOT NULL,
    `date` DATETIME NOT NULL,
    `IDmethod_pay` BIGINT NOT NULL,
    `IDdonation_type` INT NOT NULL
);
CREATE TABLE `Donation_type`(
    `IDdonation_type` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `donation_name` TEXT NOT NULL
);
CREATE TABLE `subject_type`(
    `IDsubject_type` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `subject_name` BIGINT NOT NULL
);
ALTER TABLE
    `Donations` ADD CONSTRAINT `donations_iddonation_type_foreign` FOREIGN KEY(`IDdonation_type`) REFERENCES `Donation_type`(`IDdonation_type`);
ALTER TABLE
    `Donations` ADD CONSTRAINT `donations_idbenefactor_foreign` FOREIGN KEY(`IDBenefactor`) REFERENCES `Benefactors`(`IDBenefactor`);
ALTER TABLE
    `contact_form` ADD CONSTRAINT `contact_form_idsubject_type_foreign` FOREIGN KEY(`IDSubject_type`) REFERENCES `subject_type`(`IDsubject_type`);
ALTER TABLE
    `Donations` ADD CONSTRAINT `donations_idmethod_pay_foreign` FOREIGN KEY(`IDmethod_pay`) REFERENCES `Method_pay`(`IDmethod_pay`);