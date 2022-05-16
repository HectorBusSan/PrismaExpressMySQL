/*
  Warnings:

  - You are about to drop the `explorer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `explorer`;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(250) NOT NULL,
    `mission` VARCHAR(250) NOT NULL,
    `azureCertification` BOOLEAN NOT NULL DEFAULT false,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastUpdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Post_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
