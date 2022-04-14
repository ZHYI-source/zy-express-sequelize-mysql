/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : localhost:3306
 Source Schema         : mk_db

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 14/04/2022 10:35:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'admin' COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'Vchs0bbdk2pr/Ac6DsHruw==' COMMENT '密码',
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'John Doe',
  `verificationCode` int(11) NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('4d483220-775f-410b-9434-c92ed630eb1f', 'admin', 'Vchs0bbdk2pr/Ac6DsHruw==', '书中枫叶', NULL, '2022-04-14 10:18:14', '2022-04-14 10:18:14');
INSERT INTO `users` VALUES ('a2a282b9-80a4-4485-8421-53c220fc60ec', 'admin4', 'Vchs0bbdk2pr/Ac6DsHruw==', '书中枫叶', NULL, '2022-04-14 10:31:19', '2022-04-14 10:31:19');
INSERT INTO `users` VALUES ('a5f17f58-1273-416b-9863-eacaacdf49fa', 'admin3', 'Vchs0bbdk2pr/Ac6DsHruw==', '书中枫叶', NULL, '2022-04-14 10:29:59', '2022-04-14 10:29:59');

SET FOREIGN_KEY_CHECKS = 1;
