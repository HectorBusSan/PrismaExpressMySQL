-- CreateTable
CREATE TABLE `Explorer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(250) NOT NULL,
    `mission` VARCHAR(250) NOT NULL,
    `azureCertification` BOOLEAN NOT NULL DEFAULT false,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Explorer_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
