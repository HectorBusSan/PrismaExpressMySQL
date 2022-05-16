-- CreateTable
CREATE TABLE `ExplorerM` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NOT NULL,
    `lang` VARCHAR(250) NOT NULL,
    `missionCommander` VARCHAR(250) NOT NULL,
    `enrollment` INTEGER NOT NULL,
    `hasCertification` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
