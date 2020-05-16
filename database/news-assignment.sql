CREATE DATABASE `assignment` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE assignment;

CREATE TABLE `news` (
  `news_id` varchar(100) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `short_description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` longtext,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(100) DEFAULT NULL,
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `users` (
  `user_id` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`user_id`,`username`,`password`,`role`,`created_date`,`created_by`) VALUES ('6052dcc8-939b-11ea-8137-5bd51a02bdac','admin','$2b$10$dicQ4rAegka3zaHS1Pwrhu/SNIDOM.TH3eNkQ3aajNxU1fDvmdOGK','admin','2020-05-11 22:23:33',NULL);
