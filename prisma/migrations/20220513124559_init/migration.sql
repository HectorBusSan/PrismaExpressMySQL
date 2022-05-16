/*
  Warnings:

  - You are about to drop the column `azureCertification` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreated` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `lastUpdate` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `mission` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `post` table. All the data in the column will be lost.
  - You are about to drop the `explorerm` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `enrollment` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lang` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missionCommander` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Post_name_key` ON `post`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `azureCertification`,
    DROP COLUMN `dateCreated`,
    DROP COLUMN `lastUpdate`,
    DROP COLUMN `mission`,
    DROP COLUMN `username`,
    ADD COLUMN `enrollment` INTEGER NOT NULL,
    ADD COLUMN `hasCertification` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `lang` VARCHAR(250) NOT NULL,
    ADD COLUMN `missionCommander` VARCHAR(250) NOT NULL,
    MODIFY `name` VARCHAR(250) NOT NULL;

-- DropTable
DROP TABLE `explorerm`;

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
