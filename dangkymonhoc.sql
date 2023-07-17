-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2023 at 03:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dangkymonhoc`
--

-- --------------------------------------------------------

--
-- Table structure for table `diems`
--

CREATE TABLE `diems` (
  `id` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `quatrinh` varchar(255) NOT NULL,
  `giuaky` varchar(255) NOT NULL,
  `diemthi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `giangviens`
--

CREATE TABLE `giangviens` (
  `id` varchar(255) DEFAULT NULL,
  `msgiangvien` varchar(255) NOT NULL,
  `tengiangvien` varchar(255) DEFAULT NULL,
  `chucvu` varchar(255) DEFAULT NULL,
  `mskhoa` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `giangviens`
--

INSERT INTO `giangviens` (`id`, `msgiangvien`, `tengiangvien`, `chucvu`, `mskhoa`, `createdAt`, `updatedAt`) VALUES
('10d4541a-c65d-4aed-910a-b35b20f5e86a', 'GV1', 'Nguyễn Thị Ngân Hà', 'Giảng Viên', '5', '2023-07-13 14:41:54', '2023-07-13 14:41:54'),
('2b59efbe-344d-47ff-a975-773977ca0a46', 'GV10', 'ThS. Nguyễn Lạc An Thư', 'Giảng Viên', '5', '2023-07-13 14:46:17', '2023-07-13 14:46:17'),
('b3754f7a-2c40-4fda-8a2c-313d7abae977', 'GV11', 'ThS. Nguyễn Trần Phúc Thịnh', 'Giảng Viên', '5', '2023-07-13 14:46:35', '2023-07-13 14:46:35'),
('34b37514-58e8-490d-b731-b77dbe596584', 'GV12', 'ThS. Nguyễn Trọng Nghĩa', 'Giảng Viên', '5', '2023-07-13 14:46:48', '2023-07-13 14:46:48'),
('accd09d1-258d-43b1-805d-41dca42007e1', 'GV13', 'ThS. Phạm Liệu', 'Giảng Viên', '5', '2023-07-13 14:46:59', '2023-07-13 14:46:59'),
('b4e1db5b-225f-494e-a7d1-21f0aa1da31d', 'GV14', 'ThS. Nguyễn Ngọc Lâm', 'Giảng Viên', '5', '2023-07-13 14:47:12', '2023-07-13 14:47:12'),
('07265d50-419c-459f-8859-08442edc9973', 'GV15', 'ThS. Trần Thị Mỹ Huỳnh', 'Giảng Viên', '5', '2023-07-13 14:47:32', '2023-07-13 14:47:32'),
('ca1dfaab-6f39-4bce-b4e5-2cd44ee3854a', 'GV16', 'TS. Đặng Trường Sơn', 'Trưởng Khoa', '5', '2023-07-13 14:47:47', '2023-07-13 14:47:47'),
('7b913482-74cf-4dc2-a6da-1e9ea2b1a21d', 'GV17', 'ThS. Nguyễn Thanh Tùng', 'Giảng Viên', '5', '2023-07-13 14:48:22', '2023-07-13 14:48:22'),
('1a9efb75-d10f-4f40-8455-7eef2fc37d5b', 'GV18', 'ThS, Trần Văn Hùng', 'Giảng Viên', '5', '2023-07-13 14:48:33', '2023-07-13 14:48:33'),
('87a8d2b1-ac29-4384-a21c-0f55ae131953', 'GV19', 'ThS. Hồ Đình Khả', 'Giảng Viên', '5', '2023-07-13 14:49:10', '2023-07-13 14:49:10'),
('16cd06e3-22b2-49c9-a2ab-5bb11300cba8', 'GV2', 'Trần Quốc Trường', 'Giảng Viên', '5', '2023-07-13 14:42:57', '2023-07-13 14:42:57'),
('a37b414c-503e-4157-a7e7-acd914e8dc50', 'GV20', 'ThS. Trần Thị Như Ý', 'Giảng Viên', '5', '2023-07-13 14:49:24', '2023-07-13 14:49:24'),
('d1d2d59e-9744-44e1-b58e-7947b98d6a19', 'GV21', 'ThS. Ngô Xuân Bách', 'Trưởng Trung Tâm Máy Tính', '5', '2023-07-13 14:49:47', '2023-07-13 14:49:47'),
('e798d0e6-0eb3-4129-b71e-a25bc1d142a0', 'GV22', 'ThS. Lê Triệu Ngọc Đức', 'Giảng Viên', '5', '2023-07-13 14:50:16', '2023-07-13 14:50:16'),
('7a304c08-f478-4d53-928f-b22bdc68db45', 'GV23', 'ThS. Lê Thị Mỹ Dung', 'Giảng Viên', '5', '2023-07-13 14:50:28', '2023-07-13 14:50:28'),
('b0aa141b-9d16-4480-829a-c172aa07c3b1', 'GV24', 'ThS. Trịnh Thanh Duy', 'Giảng Viên', '5', '2023-07-13 14:50:39', '2023-07-13 14:50:39'),
('527850d1-cdad-432b-af09-b8c61855a0d4', 'GV3', 'CN. Hoàng Xuân Phương', 'Nhân Viên', '5', '2023-07-13 14:43:31', '2023-07-13 14:43:31'),
('15e408ce-56e4-4e86-bb40-ffb7e44b71cd', 'GV4', 'KS. Hà Vũ Tuân', 'Nhân Viên', '5', '2023-07-13 14:43:48', '2023-07-13 14:43:48'),
('cb66b615-4f09-471a-8af5-ac004d665d62', 'GV5', 'KS. Dương Thái Thương', 'Nhân Viên', '5', '2023-07-13 14:44:04', '2023-07-13 14:44:04'),
('2eff70b3-a509-4811-a24e-b95eb8965bad', 'GV6', 'Lâm Kim Dung', 'Thư Ký Khoa', '5', '2023-07-13 14:44:17', '2023-07-13 14:44:17'),
('40ba86de-b43c-4538-bf39-f1cb49d3c626', 'GV7', 'KS. Nguyễn Thị Thanh Xuân', 'Giảng Viên', '5', '2023-07-13 14:44:36', '2023-07-13 14:44:36'),
('6c5a86a9-a561-45c7-aae8-b22ea6473827', 'GV8', 'ThS. Hà Anh Vũ', 'Giảng Viên', '5', '2023-07-13 14:44:52', '2023-07-13 14:44:52'),
('f685183f-990c-4ee6-8edc-59d2e58fcf86', 'GV9', 'Lương An Vinh', 'Phó Trưởng Khoa', '5', '2023-07-13 14:46:03', '2023-07-13 14:46:03');

-- --------------------------------------------------------

--
-- Table structure for table `hockies`
--

CREATE TABLE `hockies` (
  `id` varchar(255) DEFAULT NULL,
  `mshocky` varchar(255) NOT NULL,
  `tenhocky` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hockies`
--

INSERT INTO `hockies` (`id`, `mshocky`, `tenhocky`, `createdAt`, `updatedAt`) VALUES
('9bbd984a-f19c-4549-b1a8-e8ebf9f622b4', 'HK1', 'Học kỳ 1', '2023-06-19 05:51:36', '2023-06-19 05:51:36'),
('1c220a0b-d181-4de4-8a53-642d051e5c12', 'HK2', 'Học kỳ 2', '2023-06-19 05:51:43', '2023-06-19 05:51:43'),
('b41e6cd3-d3ca-4f34-8d2d-1553a72b9708', 'HK3', 'Học kỳ 3', '2023-06-19 05:51:50', '2023-06-19 05:51:50'),
('e01296e7-ddb7-483b-b49d-671889d78e6e', 'HK4', 'Học kỳ 4', '2023-06-19 05:51:56', '2023-06-19 05:51:56'),
('92bcf128-891e-489f-9013-f73687f52788', 'HK5', 'Học kỳ 5', '2023-06-19 05:52:00', '2023-06-19 05:52:00'),
('a5a68700-1506-4dd8-a790-86d9c2342b21', 'HK6', 'Học kỳ 6', '2023-06-19 05:52:06', '2023-06-19 05:52:06'),
('91b5cd06-69aa-4dfd-a95b-e58cbd164ee2', 'HK7', 'Học kỳ 7', '2023-06-19 05:52:15', '2023-06-19 05:52:15'),
('79108a55-261d-4716-8504-856ced997392', 'HK8', 'Học kỳ 8', '2023-06-19 05:52:24', '2023-06-19 05:52:24');

-- --------------------------------------------------------

--
-- Table structure for table `hocphis`
--

CREATE TABLE `hocphis` (
  `id` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `hocphi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khoas`
--

CREATE TABLE `khoas` (
  `id` varchar(255) DEFAULT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `tenkhoa` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khoas`
--

INSERT INTO `khoas` (`id`, `mskhoa`, `tenkhoa`, `createdAt`, `updatedAt`) VALUES
('073973ed-138e-40ae-8be6-bb3204bb9308', '0', 'ALL', '2023-06-19 05:53:32', '2023-06-19 05:53:32'),
('18344808-ae3c-4fba-b1fc-51caf9c4fc33', '5', 'Công nghệ thông tin', '2023-06-19 05:48:49', '2023-06-19 05:48:49');

-- --------------------------------------------------------

--
-- Table structure for table `lophocs`
--

CREATE TABLE `lophocs` (
  `id` varchar(255) DEFAULT NULL,
  `mslop` varchar(255) NOT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lophocs`
--

INSERT INTO `lophocs` (`id`, `mslop`, `mskhoa`, `createdAt`, `updatedAt`) VALUES
('223c6531-cd1c-470f-86a7-ba5e5c933baa', 'D23_TH01', '5', '2023-06-25 07:03:36', '2023-06-25 07:03:36'),
('055b67fe-573b-4141-86d2-5de9ee46217a', 'D23_TH02', '5', '2023-06-25 07:03:47', '2023-06-25 07:03:47'),
('d93df05e-db04-461e-9de0-669f36a076a9', 'D23_TH03', '5', '2023-06-25 07:03:57', '2023-06-25 07:03:57'),
('d8daee3e-92d1-4a05-b4df-750582f329f2', 'D23_TH04', '5', '2023-07-01 08:31:15', '2023-07-01 08:31:15');

-- --------------------------------------------------------

--
-- Table structure for table `lops`
--

CREATE TABLE `lops` (
  `id` varchar(255) DEFAULT NULL,
  `mslophoc` varchar(255) NOT NULL,
  `mssv` varchar(255) NOT NULL,
  `tenlophoc` varchar(255) DEFAULT NULL,
  `ngaybd` varchar(255) DEFAULT NULL,
  `ngaykt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `monhocnguyenvongs`
--

CREATE TABLE `monhocnguyenvongs` (
  `id` varchar(255) DEFAULT NULL,
  `msmh` varchar(255) NOT NULL,
  `mssv` varchar(255) NOT NULL,
  `hocphi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `monhocs`
--

CREATE TABLE `monhocs` (
  `id` varchar(255) DEFAULT NULL,
  `msmh` varchar(255) NOT NULL,
  `tenmh` varchar(255) DEFAULT NULL,
  `sotinchi` varchar(255) DEFAULT NULL,
  `sotiet` varchar(255) DEFAULT NULL,
  `lythuyet` varchar(255) DEFAULT NULL,
  `thuchanh` varchar(255) DEFAULT NULL,
  `tuhoc` varchar(255) DEFAULT NULL,
  `mshocky` varchar(255) NOT NULL,
  `mota` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `monhocs`
--

INSERT INTO `monhocs` (`id`, `msmh`, `tenmh`, `sotinchi`, `sotiet`, `lythuyet`, `thuchanh`, `tuhoc`, `mshocky`, `mota`, `createdAt`, `updatedAt`) VALUES
('d6e0b3bd-0600-4aaf-a8d8-3f6a5fb38458', 'CS03001', 'Kỹ thuật số', '2', '30', '15', '15', '60', 'HK2', '2[1.1.4]', '2023-07-12 13:35:03', '2023-07-12 15:49:05'),
('4118be75-9373-4059-b433-1de2aa055874', 'CS03002', 'Thí nghiệm kỹ thuật số', '1', '30', '0', '30', '15', 'HK2', '1[0.1.1]', '2023-07-12 13:37:07', '2023-07-12 13:37:07'),
('a6b5763e-b749-4c92-9a31-edb57126c48d', 'CS03003', 'Kỹ thuật lập trình', '3', '45', '30', '15', '90', 'HK3', '3[2.1.6]', '2023-07-12 13:37:50', '2023-07-12 13:37:50'),
('b3c99ca0-93af-4584-806a-11895a9e6db7', 'CS03004', 'Thực hành kỹ thuật lập trình', '1', '30', '0', '30', '15', 'HK3', '1[0.1.1]', '2023-07-12 13:38:20', '2023-07-12 13:38:20'),
('43b6b86c-788a-4899-866e-c862f7f3170a', 'CS03005', 'Toán tin học', '3', '45', '30', '15', '90', 'HK3', '3[2.1.6]', '2023-07-12 13:42:39', '2023-07-12 13:42:39'),
('2c733211-08e1-4825-b8e2-604545834e92', 'CS03007', 'Cấu trúc dữ liệu và thuật ', '3', '45', '30', '15', '90', 'HK4', '3[2.1.6]', '2023-07-12 13:43:50', '2023-07-12 13:43:50'),
('172c8789-b095-4ad3-b593-370bf6539b2c', 'CS03008', 'Cơ sở dữ liệu', '3', '45', '30', '15', '90', 'HK4', '3[2.1.6]', '2023-07-12 13:44:17', '2023-07-12 13:44:17'),
('d346623a-a4c3-4b64-b2e6-ad27dc7e6c9b', 'CS03009', 'Hệ điều hành', '3', '45', '30', '15', '90', 'HK4', '3[2.1.6]', '2023-07-12 13:44:44', '2023-07-12 13:44:44'),
('2e24ebfd-3ecf-4d26-a3b7-3b8ec5c9af1f', 'CS03010', 'Thực hành Cấu trúc dữ liệu và thuật giải', '1', '30', '0', '30', '15', 'HK4', '1[0.1.1]', '2023-07-12 13:45:15', '2023-07-12 13:45:15'),
('3973a985-6133-4376-9096-4daa15192567', 'CS03011', 'Thực hành Cơ sở dữ liệu', '1', '30', '0', '30', '15', 'HK4', '1[0.1.1]', '2023-07-12 13:45:52', '2023-07-12 13:45:52'),
('da7e1015-e287-4abe-ac7b-ce83984f09da', 'CS03012', 'Thực hành Hệ điều hành', '1', '30', '0', '30', '15', 'HK4', '1[0.1.1]', '2023-07-12 13:46:32', '2023-07-12 13:46:32'),
('7bf5af99-42a0-4f02-a65b-5e437cfbd4ce', 'CS03013', 'Công nghệ phần mềm', '3', '45', '30', '15', '90', 'HK6', '3[2.1.6]', '2023-07-12 13:49:09', '2023-07-12 13:49:09'),
('2ee93857-fa58-4270-9146-d8c36fdea24a', 'CS03014', 'Đồ án tin học', '2', '90', '0', '90', '30', 'HK5', '2[0.2.2]', '2023-07-12 13:49:37', '2023-07-12 13:49:37'),
('26ad44b0-c682-42c2-b42a-d66abcd7188c', 'CS03015', 'Lập trình hướng đối tượng', '3', '45', '30', '15', '90', 'HK5', '3[2.1.6]', '2023-07-12 13:50:29', '2023-07-12 13:50:29'),
('724d69d3-0572-49d2-afa4-168431c370d4', 'CS03016', 'Thực hành Lập trình hướng đối tượng', '1', '30', '0', '30', '15', 'HK5', '1[0.1.1]', '2023-07-12 13:51:00', '2023-07-12 13:51:00'),
('ba321043-ef6d-4b4e-8454-a887aad5638f', 'CS03017', 'Lập trình ứng dụng cơ sở dữ liệu', '3', '45', '30', '15', '90', 'HK6', '3[2.1.6]', '2023-07-12 13:57:16', '2023-07-12 13:57:16'),
('c663294d-2b23-4945-803f-03290953d635', 'CS03020', 'Quản trị cơ sở dữ liệu', '3', '45', '30', '15', '90', 'HK6', '3[2.1.6]', '2023-07-12 13:57:48', '2023-07-12 13:57:48'),
('e614c699-47cd-4feb-bb7e-504812f76b06', 'CS03022', 'Quản lý dự án', '3', '45', '30', '15', '90', 'HK5', '3[2.1.6]', '2023-07-12 14:13:11', '2023-07-12 14:13:11'),
('3a7589f6-6b93-4da9-a38f-a9ada2845c8c', 'CS03024', 'An ninh máy tính', '2', '30', '15', '15', '60', 'HK5', '2[1.1.4]', '2023-07-12 14:13:37', '2023-07-12 14:13:37'),
('0fbb9977-48a5-4036-8e75-7249e05e501a', 'CS03025', 'Thực hành An ninh máy tính', '1', '30', '0', '30', '15', 'HK5', '1[0.1.1]', '2023-07-12 14:14:06', '2023-07-12 14:14:06'),
('3940f63f-5f12-4a3c-a4c3-a2b1feb0d416', 'CS03026', 'Mã hóa ứng dụng', '3', '45', '30', '15', '90', 'HK5', '3[2.1.6]', '2023-07-12 14:14:30', '2023-07-12 14:14:30'),
('17e0ed40-1d4e-4741-890f-b04bd5d47a2d', 'CS03027', 'Thực hành Hệ quản trị cơ sở dữ liệu', '1', '30', '0', '30', '15', 'HK6', '1[0.1.1]', '2023-07-12 13:58:13', '2023-07-12 13:58:13'),
('f986add8-27da-408c-a67f-9985dd3ed386', 'CS03028', 'Thực hành Lập trình ứng dụng cơ sở dữ liệu', '1', '30', '0', '30', '15', 'HK6', '1[.0.1.1]', '2023-07-12 13:58:35', '2023-07-12 13:58:35'),
('4fbab717-27ca-4f4c-a9cc-e02a0780837c', 'CS03030', 'Đồ án Phân tích thiết kế hệ thống thông tin', '2', '90', '0', '90', '30', 'HK7', '2[0.2.2]', '2023-07-12 13:59:16', '2023-07-12 13:59:16'),
('964e4093-491f-47c2-8ec7-008d9dfec07b', 'CS03033', 'Phát triển phần mềm nguồn mở', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 13:59:43', '2023-07-12 13:59:43'),
('3e69caab-abaf-42ea-8b1f-6f1d26bca7b5', 'CS03034', 'Thực hành Phát triển phần mềm nguồn mở', '1', '30', '0', '30', '15', 'HK7', '1[0.1.1]', '2023-07-12 14:00:33', '2023-07-12 14:00:41'),
('0d432e19-416f-4a0c-9457-dd374a8e6755', 'CS03036', 'Lập trình Web', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:15:04', '2023-07-12 14:15:04'),
('41a70418-bb66-4c0c-a13e-bc6c93f92cbe', 'CS03037', 'Lập trình Windows', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:15:35', '2023-07-12 14:15:35'),
('3d861b25-8348-4627-a67d-e1ba2067e959', 'CS03038', 'Lập trình thiết bị di động', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:15:52', '2023-07-12 14:15:52'),
('c59f76d1-2733-413b-b56b-fc3b91720973', 'CS03039', 'Thực hành Lập trình Web', '1', '30', '0', '30', '15', 'HK7', '1[0.1.1]', '2023-07-12 14:16:21', '2023-07-12 14:16:21'),
('e0dc1f6a-2d11-4946-b1f6-479161c68e08', 'CS03040', 'Thực hành Lập trình Windows', '1', '30', '0', '30', '15', 'HK7', '1[0.1.1]', '2023-07-12 14:16:39', '2023-07-12 14:16:39'),
('1bb78272-b9ac-49ec-90a1-75587a4d3e54', 'CS03041', 'Thực hành Lập trình thiết bị di động', '1', '30', '0', '30', '15', 'HK7', '1[0.1.1]', '2023-07-12 14:17:01', '2023-07-12 14:17:01'),
('ea6f798e-fdc2-4ab5-a0d6-38147002aaba', 'CS03042', 'Triển khai hệ thống thông tin', '3', '45', '30', '15', '90', 'HK8', '3[2.1.6]', '2023-07-12 14:17:57', '2023-07-12 14:17:57'),
('bc3f5d55-201c-4026-831e-8dc487f31f52', 'CS03043', 'Xây dựng phần mềm Web', '3', '45', '30', '15', '90', 'HK8', '3[2.1.6]', '2023-07-12 14:18:19', '2023-07-12 14:18:19'),
('63fe7330-a277-4463-b7b1-e979be1fe3dc', 'CS03044', 'Xây dựng phần mềm Widows', '3', '45', '30', '15', '90', 'HK8', '3[2.1.6]', '2023-07-12 14:18:41', '2023-07-12 14:18:41'),
('9c196a72-dd65-42b7-9bb0-59edcc8fc9d4', 'CS03045', 'Kiểm thử phầm mềm', '3', '45', '30', '15', '90', 'HK6', '3[2.1.6]', '2023-07-12 14:01:14', '2023-07-12 14:01:14'),
('a1caa89b-681f-43d0-b077-16b448794b15', 'CS03047', 'Nhập môn công tác kỹ sư', '2', '30', '30', '0', '60', 'HK4', '2[2.0.4]', '2023-07-12 13:26:49', '2023-07-12 13:26:49'),
('eaa273cf-7e1e-4cb7-99d3-3fd9ea2906f5', 'CS03048', 'Môn học tự chọn 1_Chuyên ngành', '3', '45', '30', '15', '90', 'HK5', '3[2.1.6]', '2023-07-12 14:01:42', '2023-07-12 14:01:42'),
('9dcf2c5c-0b87-49a0-b546-e275b54abc6f', 'CS03049', 'Môn học tự chọn 2_Chuyên ngành', '3', '45', '30', '15', '90', 'HK5', '3[2.1.6]', '2023-07-12 14:03:03', '2023-07-12 14:03:15'),
('cd956740-8963-4528-ba48-93c9e18b2d5c', 'CS03050', 'Môn học tự chọn 3_Chuyên ngành', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:03:47', '2023-07-12 14:03:47'),
('9466c12f-900e-451e-b070-cad7effef66d', 'CS03051', 'Môn học tự chọn 4_Chuyên ngành', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:04:08', '2023-07-12 14:04:08'),
('c29f13b7-45ab-4f92-8301-b589ee1b4f80', 'CS03052', 'Môn học tự chọn 5_Chuyên ngành', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:04:28', '2023-07-12 14:04:28'),
('bf982fce-268c-45c1-b3ba-cf70c205c2d1', 'CS03053', 'Môn học tự chọn 6_Chuyên ngành', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:04:45', '2023-07-12 14:04:45'),
('4d3a1b60-7c8c-4271-9d2a-4afb522af8fd', 'CS03054', 'Môn học tự chọn 7_Chuyên ngành', '3', '45', '30', '15', '90', 'HK8', '3[2.1.6]', '2023-07-12 14:06:34', '2023-07-12 14:06:34'),
('6e5ab8c4-9635-4a3f-8d20-87fee24e16c0', 'CS03055', 'Môn học tự chọn 8_Chuyên ngành', '3', '45', '30', '15', '90', 'HK8', '3[2.1.6]', '2023-07-12 14:05:31', '2023-07-12 14:06:16'),
('86eb68e7-1778-4382-91de-3bd70e831234', 'CS03056', 'Thực tập nghề nghiệp', '1', '30', '0', '30', '15', 'HK6', '1[0.1.1]', '2023-07-12 14:07:01', '2023-07-12 14:10:02'),
('4e4e76a6-d9e2-43bd-95c9-92ceb2ec5070', 'CS03057', 'Thực tập chuyên ngành', '3', '135', '0', '135', '45', 'HK7', '3[0.3.3]', '2023-07-12 14:20:29', '2023-07-12 14:20:29'),
('7bbc5b4a-065a-492d-90df-7cfda68e66b7', 'CS03058', 'Xây dựng phần mềm thiết bị di động', '3', '45', '30', '15', '90', 'HK8', '3[2.1.6]', '2023-07-12 14:21:40', '2023-07-12 14:21:40'),
('9f2f8e8c-d1c9-4827-91cf-d0df106059e1', 'CS03153', 'Đồ án/Khóa luận tốt nghiệp', '5', '255', '0', '255', '75', 'HK8', '5[0.5.5]', '2023-07-12 14:10:43', '2023-07-12 14:10:43'),
('2ee0995a-c7d3-47b9-826b-a3efb6348301', 'CS09001', 'Nhập môn lập trình', '3', '45', '30', '15', '90', 'HK2', '3[2.1.6]', '2023-07-12 13:51:26', '2023-07-12 13:51:26'),
('3d2db845-adf9-4329-bce3-ce9f1393ddd2', 'CS09002', 'Thực hành Nhập môn lập trình', '1', '30', '0', '30', '15', 'HK2', '1[0.1.1]', '2023-07-12 13:52:01', '2023-07-12 13:52:01'),
('c3ac5b55-4689-44d9-8c3f-3d6f992a9819', 'CS09003', 'Nhập môn Web và ứng dụng', '3', '45', '30', '15', '90', 'HK6', '3[2.1.6]', '2023-07-12 13:53:07', '2023-07-12 13:53:07'),
('52e908d9-3a3d-405c-8534-98f755e9f8b0', 'CS09004', 'Thực hành Nhập môn Web và ứng dụng', '1', '30', '0', '30', '15', 'HK6', '1[0.1.1]', '2023-07-12 13:53:45', '2023-07-12 13:53:45'),
('b0c904df-fe5d-4fa6-b48d-0907d8dac78b', 'CS09005', 'Nhập môn cấu trúc dữ liệu', '3', '45', '30', '15', '90', 'HK3', '3[2.1.6]', '2023-07-12 13:54:20', '2023-07-12 13:54:20'),
('d1adc47b-fb53-427c-b0a3-59a8afbd77bf', 'CS09006', 'Tổ chức cấu trúc máy tính', '3', '45', '30', '15', '90', 'HK3', '3[2.1.6]', '2023-07-12 13:54:54', '2023-07-12 13:54:54'),
('6825593e-3a16-4755-a26c-adbaff2c407f', 'CS09007', 'Thực hành Nhập môn cấu trúc dữ liệu', '1', '30', '0', '30', '15', 'HK3', '1[0.1.1]', '2023-07-12 13:55:23', '2023-07-12 13:55:23'),
('729ff62f-12ac-41e1-aa35-e4acbc05ab60', 'CS09008', 'Thực hành Tổ chức cấu trúc máy tính', '1', '30', '0', '30', '15', 'HK3', '1[0.1.1]', '2023-07-12 13:55:56', '2023-07-12 13:55:56'),
('5d236c19-57d3-40b9-a1b8-7c2dfd96e2c8', 'CS09009', 'Mạng máy tính', '3', '45', '30', '15', '90', 'HK5', '3[2.1.6]', '2023-07-12 13:56:22', '2023-07-12 13:56:31'),
('00fa292c-fafc-484c-b77a-2ad92c4d7a95', 'CS09010', 'Phân tích thiết kế hệ thống thông tin', '3', '45', '30', '15', '90', 'HK7', '3[2.1.6]', '2023-07-12 14:21:01', '2023-07-12 14:21:01'),
('639802c7-8d6c-4834-830e-40a271d488c7', 'CS09151', 'Thực tập tốt nghiệp', '4', '120', '0', '120', '60', 'HK8', '4[0.4.4]', '2023-07-12 14:09:45', '2023-07-12 14:09:45'),
('e64d4dfa-acb8-4f90-a7c2-acfcb0e9cbca', 'GS09001', 'Môn học tự chọn 1_KHXHNV', '2', '30', '15', '15', '60', 'HK7', '2[1.1.4]', '2023-07-12 13:27:53', '2023-07-12 13:27:53'),
('081b06f0-3075-45ba-bea6-57e189c94043', 'GS09011', 'KHXHNV_Đại cương văn hóa Việt Nam', '2', '30', '15', '15', '60', 'HK7', '2[1.1.4]', '2023-07-12 14:11:26', '2023-07-12 14:11:26'),
('30b93390-cacb-4ab0-af18-def5264675e2', 'GS09012', 'KHXHNV_Kỹ năng giao tiếp', '2', '45', '15', '30', '45', 'HK7', '2[1.1.3]', '2023-07-12 14:11:58', '2023-07-12 14:11:58'),
('a2834dea-3ef0-4db4-85af-ff53a6c2a3a0', 'GS09013', 'KHXHNV_Phương pháp luận sáng tạo', '2', '30', '15', '15', '60', 'HK7', '2[1.1.4]', '2023-07-12 14:12:28', '2023-07-12 14:12:28'),
('6e80b37a-f29e-4518-8ede-bf1c0f5867ce', 'GS19001', 'Tiếng anh 1', '2', '45', '15', '30', '45', 'HK1', '2[1.1.3]', '2023-07-12 13:28:31', '2023-07-12 13:28:31'),
('ebcb3695-ebef-4aab-8f46-ed215601c38a', 'GS19002', 'Tiếng anh 2', '2', '45', '30', '15', '45', 'HK2', '2[1.1.3]', '2023-07-12 13:28:55', '2023-07-12 13:28:55'),
('c6d40c06-1e86-417b-92f7-ad29af5aef53', 'GS19003', 'Tiếng anh 3', '2', '45', '15', '30', '45', 'HK3', '2[1.1.3]', '2023-07-12 13:29:17', '2023-07-12 13:29:17'),
('2e2bf60a-a321-40dd-9e1b-e34625278f76', 'GS19004', 'Tiếng anh 4', '2', '45', '15', '30', '45', 'HK4', '2[.1.1.3]', '2023-07-12 13:29:39', '2023-07-12 13:29:39'),
('aacb9202-3726-4a25-aee9-048f95408e92', 'GS29001', 'Pháp luật đại cương Việt Nam', '3', '45', '30', '15', '90', 'HK3', '3[2.1.6]', '2023-07-12 13:31:00', '2023-07-12 13:31:00'),
('24d5dda4-4e71-4b2c-a008-5519aee85288', 'GS33001', 'Toán A1 (Hàm 1 biến, chuỗi)', '4', '60', '45', '15', '120', 'HK1', '4[3.1.8]', '2023-07-12 13:11:03', '2023-07-12 13:11:03'),
('3c30e59b-7233-4952-97bf-657c7a4cce37', 'GS33002', 'Toán A2 (Hàm nhiều biến, giải tích véc tơ)', '4', '60', '45', '15', '120', 'HK2', '4[3.1.8]', '2023-07-12 13:11:47', '2023-07-12 13:11:47'),
('0530d633-2fc7-4b95-9121-374eca43d10c', 'GS33003', 'Toán A3 (Đại số tuyến tính)', '3', '45', '30', '15', '90', 'HK3', '3[2.6.1]', '2023-07-12 13:12:24', '2023-07-12 13:12:24'),
('72129501-4410-4de2-b79e-b6f9cc0da110', 'GS43001', 'Vật lý 1', '3', '45', '30', '15', '90', 'HK1', '3[2.1.6]', '2023-07-12 13:16:24', '2023-07-12 13:16:24'),
('706f291c-24aa-417b-bf20-2d886effdb41', 'GS43002', 'Vật lý 2', '4', '60', '45', '15', '120', 'HK2', '4[3.1.8]', '2023-07-12 13:16:47', '2023-07-12 13:16:47'),
('ec313bc4-3e0f-4cae-a468-c34bccf8ce59', 'GS49004', 'Thí nghiệm vậy lý_Phần 1', '1', '30', '0', '30', '15', 'HK1', '1[0.1.1]', '2023-07-12 13:23:17', '2023-07-12 13:23:17'),
('e701cdc2-b0e0-42e6-9af3-0d114eafb596', 'GS49005', 'Thí nghiệm vậy lý_Phần 2', '1', '30', '0', '30', '15', 'HK2', '1[0.1.1]', '2023-07-12 13:23:41', '2023-07-12 13:23:41'),
('60f5ea84-d02b-4a78-9cdb-21292f243119', 'GS59001', 'Tin học đại cương', '2', '30', '30', '0', '60', 'HK1', '2[2.0.4]', '2023-07-12 13:25:01', '2023-07-12 13:25:01'),
('6b04f706-0d75-4006-911e-3fea0e881f73', 'GS59002', 'Thực hành tin học đại cương', '2', '45', '0', '45', '45', 'HK1', '2[0.2.3]', '2023-07-12 13:25:31', '2023-07-12 13:25:31'),
('599bc66f-ab82-4c29-ad61-04cc230b365e', 'GS79005', 'Triết học Mác - Lênin', '3', '45', '45', '0', '90', 'HK2', '3[3.0.6]', '2023-07-12 13:31:36', '2023-07-12 13:32:49'),
('e12d2d61-1af5-48ce-9711-d63d1ed40490', 'GS79006', 'Kinh tế chính trị Mác - Lênin', '2', '30', '30', '0', '60', 'HK2', '2[2.0.4]', '2023-07-12 13:32:41', '2023-07-12 13:32:41'),
('3171c80a-1076-4c3a-bff1-301cd7b317b8', 'GS79007', 'Chủ nghĩa xã hội khoa học', '2', '30', '30', '0', '60', 'HK3', '2[2.0.4]', '2023-07-12 13:33:28', '2023-07-12 13:33:28'),
('995c8a5b-b3c9-4671-8ab5-56cf642d4e50', 'GS79008', 'Lịch sử Đảng cộng sãn Việt Nam', '2', '30', '30', '0', '60', 'HK4', '2[2.0.4]', '2023-07-12 13:34:11', '2023-07-12 13:34:11'),
('e0b28358-f8e8-42e7-b52b-7406a5c6f3ec', 'GS79009', 'Tư tưởng Hồ Chí Minh', '2', '30', '30', '0', '60', 'HK5', '2[2.0.4]', '2023-07-12 13:34:33', '2023-07-12 13:34:33'),
('4d9ea83e-31b9-4090-8d3b-4fa6f0313bb9', 'GS93001', 'Giáo dục thể chất 1', '0', '30', '0', '30', '15', 'HK2', '0[0.0.1]', '2023-07-12 13:03:01', '2023-07-12 13:03:01'),
('ebf99088-3cbf-462d-9122-6e3d939a2ecd', 'GS93002', 'Giáo dục thể chất 2', '0', '30', '0', '30', '15', 'HK2', '0[0.0.1]', '2023-07-12 13:03:18', '2023-07-12 13:03:18'),
('55da7cbb-88ef-48f6-b93c-beab88841f95', 'GS93004', 'Giáo dục thể chất 4', '0', '30', '0', '30', '3015', 'HK3', '0[0.0.1]', '2023-07-12 13:02:45', '2023-07-12 13:02:45'),
('41c3259a-5e8d-43e9-b586-93fa6ae1d00e', 'GS99003', 'Giáo dục thể chất 3', '0', '30', '0', '30', '15', 'HK3', '0[0.0.1]', '2023-07-12 13:02:02', '2023-07-12 13:02:02'),
('a86b1359-05dd-4fa3-a901-74c4a974e6d2', 'MI03002', 'Giáo dục quốc phòng (ĐH)', '0', '165', '90', '75', '240', 'HK4', '0[6.3.16]', '2023-07-12 13:01:28', '2023-07-12 13:01:28');

-- --------------------------------------------------------

--
-- Table structure for table `monhoctochucs`
--

CREATE TABLE `monhoctochucs` (
  `id` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `msgiangvien` varchar(255) NOT NULL,
  `mslophoc` varchar(255) NOT NULL,
  `siso` varchar(255) NOT NULL,
  `phanTramQT` varchar(255) NOT NULL,
  `phanTramGK` varchar(255) NOT NULL,
  `thu` varchar(255) NOT NULL,
  `tietbd` varchar(255) NOT NULL,
  `sotiet` varchar(255) NOT NULL,
  `phong` varchar(255) NOT NULL,
  `monhoctruoc` varchar(255) NOT NULL,
  `monhocsau` varchar(255) NOT NULL,
  `mota` varchar(255) NOT NULL,
  `songhanh` varchar(255) NOT NULL,
  `ngaybd` varchar(255) NOT NULL,
  `ngaykt` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `monhoctochucs`
--

INSERT INTO `monhoctochucs` (`id`, `msmh`, `msgiangvien`, `mslophoc`, `siso`, `phanTramQT`, `phanTramGK`, `thu`, `tietbd`, `sotiet`, `phong`, `monhoctruoc`, `monhocsau`, `mota`, `songhanh`, `ngaybd`, `ngaykt`, `createdAt`, `updatedAt`) VALUES
('03426c0a-4fd6-4539-ac5a-9e06bc6d25ff', 'GS43002', 'GV13', 'D23_TH03', '70', '0', '30', '2, 4', '2', '5', 'C703', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:18:26', '2023-07-15 05:18:26'),
('1292a4ef-646b-4b66-9957-2d151d6597a9', 'CS03003', 'GV13', 'D23_TH03', '70', '10', '30', '2, 4', '2', '5 ', 'C791', 'Nhập môn lập trình', '', 'BB', 'Thực hành kỹ thuật lập trình', '2024-10-08', '2025-10-02', '2023-07-15 05:49:00', '2023-07-15 05:49:00'),
('25c072fa-d693-4ce1-9da5-dd3a74214d47', 'GS43002', 'GV13', 'D23_TH04', '70', '0', '30', '2, 4', '2', '5', 'C703', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:18:26', '2023-07-15 05:18:26'),
('26a94864-5a71-464b-96ed-849230724b70', 'GS19001', 'GV1', 'D23_TH03', '40', '10', '20', '2, 4', '1', '3', 'C303', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:54:11', '2023-07-13 14:54:11'),
('33af719d-ff5f-4fcb-8b2a-f15ca692f678', 'GS33002', 'GV11', 'D23_TH04', '70', '10', '30', '3, 5', '7', '5', 'C803', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:17:45', '2023-07-15 05:17:45'),
('34d90803-318f-4b4f-ade6-8e716e8aa81a', 'CS09001', 'GV15', 'D23_TH03', '70', '10', '30', '3, 5', '10', '3', 'C805', '', 'Kỹ thuật lập trình', 'BB', 'Thực hành Nhập môn lập trình', '2024-01-03', '2024-01-06', '2023-07-15 05:30:42', '2023-07-15 05:30:42'),
('37df9d5c-a72b-4ba6-aac0-a3c7add85258', 'GS59002', 'GV14', 'D23_TH04', '30', '0', '50', '6', '3', '3', 'PM1', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:59:01', '2023-07-13 14:59:01'),
('3e515b9c-ac3f-4fc7-93ef-12082ee3f738', 'CS09001', 'GV15', 'D23_TH04', '70', '10', '30', '3, 5', '10', '3', 'C805', '', 'Kỹ thuật lập trình', 'BB', 'Thực hành Nhập môn lập trình', '2024-01-03', '2024-01-06', '2023-07-15 05:30:42', '2023-07-15 05:30:42'),
('4526cbb4-7731-425c-96cf-2d5d7c86ca01', 'GS19002', 'GV2', 'D23_TH04', '40', '10', '20', '3, 5', '3', '3', 'C303', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:16:49', '2023-07-15 05:16:49'),
('4a2ac1df-decf-4625-9216-54695b6c756f', 'GS33002', 'GV11', 'D23_TH03', '70', '10', '30', '3, 5', '7', '5', 'C803', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:17:45', '2023-07-15 05:17:45'),
('4ee4c3e5-f68e-4f81-98fc-9f9fd116535d', 'GS93002', 'GV18', 'D23_TH04', '40', '30', '0', '4', '10', '3', 'Sân', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:28:19', '2023-07-15 05:28:19'),
('53be36ca-fe4a-4179-a184-93881aa2ec2e', 'GS49004', 'GV11', 'D23_TH04', '40', '0', '0', '7', '2', '5', 'D114', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:57:49', '2023-07-13 14:57:49'),
('5d7bb535-5930-4581-863c-45565abb9bf9', 'GS93001', 'GV17', 'D23_TH04', '40', '30', '0', '2', '10', '3', 'Sân', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:27:33', '2023-07-15 05:27:33'),
('5e0be443-d124-4b35-a08b-0e690f20c545', 'GS79006', 'GV15', 'D23_TH04', '70', '20', '30', '4', '7', '3', 'C805', '', '', 'BB', '', '2024-01-03', '2025-01-06', '2023-07-15 05:22:22', '2023-07-15 05:22:22'),
('5ed15046-d956-4632-9cab-8e5d83c1af8c', 'GS93001', 'GV17', 'D23_TH03', '40', '30', '0', '2', '3', '3', 'Sân', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:27:06', '2023-07-15 05:27:06'),
('5f830563-bf16-4884-a559-f7463d400851', 'GS43001', 'GV19', 'D23_TH04', '70', '0', '30', '3, 5', '2', '5', 'C801', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:56:52', '2023-07-13 14:56:52'),
('65b820b4-d9ea-4392-ab93-6cb0d816d6b9', 'GS93002', 'GV18', 'D23_TH03', '40', '30', '0', '4', '3', '3', 'Sân', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:27:58', '2023-07-15 05:27:58'),
('6b975623-7b37-49bd-8137-9a9bf74a396a', 'GS49004', 'GV11', 'D23_TH03', '40', '0', '0', '7', '2', '5', 'D114', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:57:49', '2023-07-13 14:57:49'),
('747b6e5f-280c-42db-ab80-0b9c1793e3ff', 'GS93001', 'GV17', 'D23_TH04', '40', '30', '0', '2', '3', '3', 'Sân', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:27:06', '2023-07-15 05:27:06'),
('7667545e-9c3b-43b6-bf24-0ee3c1f992c9', 'GS79005', 'GV15', 'D23_TH03', '70', '20', '30', '2', '7', '3', 'C801', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:20:38', '2023-07-15 05:20:38'),
('7dea43f5-fd3a-4fb5-b17a-403cd4995b1d', 'CS03001', 'GV3', 'D23_TH04', '70', '30', '20', '6', '10', '3', 'C703', '', '', 'BB', 'Thí nghiệm kỹ thuật số', '2024-01-03', '2024-01-06', '2023-07-15 05:35:39', '2023-07-15 05:35:39'),
('7ef1729c-d745-424f-b8e8-22c0dad5684d', 'GS19002', 'GV2', 'D23_TH03', '40', '10', '20', '3, 5', '1', '3', 'C303', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:16:25', '2023-07-15 05:16:25'),
('8741d413-a367-4388-82d0-88650c8ea439', 'CS03001', 'GV3', 'D23_TH03', '70', '30', '20', '6', '10', '3', 'C703', '', '', 'BB', 'Thí nghiệm kỹ thuật số', '2024-01-03', '2024-01-06', '2023-07-15 05:35:39', '2023-07-15 05:35:39'),
('8d638c88-b630-4505-abf5-530c2d0ce3d8', 'CS09002', 'GV22', 'D23_TH04', '35', '0', '50', '7', '3', '3', 'PM3', '', 'Thực hành kỹ thuật lập trình', 'BB', 'Nhập môn lập trình', '2024-01-03', '2024-01-06', '2023-07-15 05:32:28', '2023-07-15 05:32:28'),
('8fb55656-4ebf-488f-8303-225a50df50e0', 'CS03003', 'GV13', 'D23_TH04', '70', '10', '30', '2, 4', '2', '5 ', 'C791', 'Nhập môn lập trình', '', 'BB', 'Thực hành kỹ thuật lập trình', '2024-10-08', '2025-10-02', '2023-07-15 05:49:00', '2023-07-15 05:49:00'),
('91aa4fb1-4699-49a8-b598-da9dc9d4bcf1', 'GS33001', 'GV12', 'D23_TH03', '70', '10', '30', '2, 4', '7', '5', 'C803', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:56:14', '2023-07-13 14:56:14'),
('955890c1-5332-460a-813c-87ab4e95d0fb', 'GS49005', 'GV14', 'D23_TH03', '35', '0', '0', '6', '2', '5', 'D114', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:19:06', '2023-07-15 05:19:06'),
('9a99e3d3-1f83-4f1c-937f-6b77a220b866', 'GS59001', 'GV13', 'D23_TH03', '70', '0', '40', '5, 7', '7', '5', 'C803', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:58:38', '2023-07-13 14:58:38'),
('a3709ed4-57c6-4e66-a956-2aef565f8ebf', 'GS19001', 'GV1', 'D23_TH04', '40', '10', '20', '2, 4', '1', '3', 'C303', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:54:11', '2023-07-13 14:54:11'),
('ab8422e4-da5f-4410-8b19-285c9340a082', 'GS79005', 'GV15', 'D23_TH04', '70', '20', '30', '2', '7', '3', 'C801', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:20:38', '2023-07-15 05:20:38'),
('be554976-24ec-4a48-a2ec-9ba5a06094e6', 'CS03002', 'GV15', 'D23_TH04', '35', '50', '0', '7', '10', '3', 'PM1', '', '', 'BB', 'Kỹ thuật số', '2024-01-03', '2024-01-06', '2023-07-15 05:34:35', '2023-07-15 05:34:35'),
('c512b17a-8f81-4660-8b9d-08b5eb5d06d0', 'GS59002', 'GV14', 'D23_TH03', '30', '0', '50', '6', '3', '3', 'PM1', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:59:01', '2023-07-13 14:59:01'),
('cbc95ed9-1434-4925-b009-4807b7650609', 'GS49005', 'GV14', 'D23_TH04', '35', '0', '0', '6', '7', '5', 'D114', '', '', 'BB', '', '2024-01-03', '2024-01-06', '2023-07-15 05:19:27', '2023-07-15 05:19:27'),
('ce630ec2-7a12-431e-bfde-12e1c21d8cc4', 'GS79006', 'GV15', 'D23_TH03', '70', '20', '30', '4', '7', '3', 'C805', '', '', 'BB', '', '2024-01-03', '2025-01-06', '2023-07-15 05:22:22', '2023-07-15 05:22:22'),
('cf555a8b-a656-4645-a1d7-fccc6390d7b3', 'GS43001', 'GV19', 'D23_TH03', '70', '0', '30', '3, 5', '2', '5', 'C801', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:56:52', '2023-07-13 14:56:52'),
('d0ab84fe-b3a2-41d1-8f84-bac856a1c748', 'GS59001', 'GV13', 'D23_TH04', '70', '0', '40', '5, 7', '7', '5', 'C803', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:58:38', '2023-07-13 14:58:38'),
('d709e198-a9d4-4870-84d3-c534defcdcd9', 'CS09002', 'GV12', 'D23_TH03', '35', '0', '50', '7', '1', '3', 'PM2', '', 'Thực hành kỹ thuật lập trình', 'BB', 'Nhập môn lập trình', '2024-01-03', '2024-01-06', '2023-07-15 05:32:03', '2023-07-15 05:32:03'),
('d8e1c854-7f56-4057-af12-00354aa96d56', 'GS33001', 'GV12', 'D23_TH04', '70', '10', '30', '2, 4', '7', '5', 'C803', '', '', 'BB', '', '2023-10-08', '2024-10-02', '2023-07-13 14:56:14', '2023-07-13 14:56:14'),
('f4cb6e9e-6d83-426b-b50b-068f9c4a766c', 'CS03002', 'GV13', 'D23_TH03', '35', '50', '0', '7', '7', '3', 'PM1', '', '', 'BB', 'Kỹ thuật số', '2024-01-03', '2024-01-06', '2023-07-15 05:34:12', '2023-07-15 05:34:12');

-- --------------------------------------------------------

--
-- Table structure for table `phieudkmhs`
--

CREATE TABLE `phieudkmhs` (
  `id` varchar(255) DEFAULT NULL,
  `msmh` varchar(255) NOT NULL,
  `tenmh` varchar(255) DEFAULT NULL,
  `mslophoc` varchar(255) DEFAULT NULL,
  `siso` varchar(255) DEFAULT NULL,
  `phanTramQT` varchar(255) DEFAULT NULL,
  `phanTramGK` varchar(255) DEFAULT NULL,
  `thu` varchar(255) DEFAULT NULL,
  `tietbd` varchar(255) DEFAULT NULL,
  `sotiet` varchar(255) DEFAULT NULL,
  `phong` varchar(255) DEFAULT NULL,
  `tengiangvien` varchar(255) DEFAULT NULL,
  `ngaybd` varchar(255) DEFAULT NULL,
  `ngaykt` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `hocphi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phieudkmhs`
--

INSERT INTO `phieudkmhs` (`id`, `msmh`, `tenmh`, `mslophoc`, `siso`, `phanTramQT`, `phanTramGK`, `thu`, `tietbd`, `sotiet`, `phong`, `tengiangvien`, `ngaybd`, `ngaykt`, `mssv`, `hocphi`, `createdAt`, `updatedAt`) VALUES
('f3c91447-ec53-454f-8cd4-4e5293db2df8', 'GS19001', 'Tiếng anh 1', 'D23_TH03', '40', '10', '20', '2, 4', '1', '3', 'C303', 'Nguyễn Thị Ngân Hà', '2023-10-08', '2024-10-02', 'DH52300123', '1232000', '2023-07-16 15:15:20', '2023-07-16 15:15:20'),
('23340b83-43be-4c3e-8fd5-68b5d5491a2d', 'GS33001', 'Toán A1 (Hàm 1 biến, chuỗi)', 'D23_TH03', '70', '10', '30', '2, 4', '7', '5', 'C803', 'ThS. Nguyễn Trọng Nghĩa', '2023-10-08', '2024-10-02', 'DH52300123', '2464000', '2023-07-16 15:15:20', '2023-07-16 15:15:20'),
('f52c4b4b-bc21-4212-803b-0c5886b6be16', 'GS43001', 'Vật lý 1', 'D23_TH03', '70', '0', '30', '3, 5', '2', '5', 'C801', 'ThS. Hồ Đình Khả', '2023-10-08', '2024-10-02', 'DH52300123', '1848000', '2023-07-16 15:15:20', '2023-07-16 15:15:20'),
('ea812055-2019-43fe-a2be-1edc1b487442', 'GS49004', 'Thí nghiệm vậy lý_Phần 1', 'D23_TH03', '40', '0', '0', '7', '2', '5', 'D114', 'ThS. Nguyễn Trần Phúc Thịnh', '2023-10-08', '2024-10-02', 'DH52300123', '616000', '2023-07-16 15:15:20', '2023-07-16 15:15:20'),
('8fcff785-a5de-406d-8bc9-5b308c2d42ad', 'GS59001', 'Tin học đại cương', 'D23_TH03', '70', '0', '40', '5, 7', '7', '5', 'C803', 'ThS. Phạm Liệu', '2023-10-08', '2024-10-02', 'DH52300123', '1232000', '2023-07-16 15:15:20', '2023-07-16 15:15:20'),
('5361e107-48f9-47d5-a2ff-55bd235ed648', 'GS59002', 'Thực hành tin học đại cương', 'D23_TH03', '30', '0', '50', '6', '3', '3', 'PM1', 'ThS. Nguyễn Ngọc Lâm', '2023-10-08', '2024-10-02', 'DH52300123', '1232000', '2023-07-16 15:15:20', '2023-07-16 15:15:20');

-- --------------------------------------------------------

--
-- Table structure for table `quantriviens`
--

CREATE TABLE `quantriviens` (
  `id` varchar(255) DEFAULT NULL,
  `msqtv` varchar(255) NOT NULL,
  `tenqtv` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sodienthoai` varchar(255) DEFAULT NULL,
  `matkhau` varchar(255) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quantriviens`
--

INSERT INTO `quantriviens` (`id`, `msqtv`, `tenqtv`, `email`, `sodienthoai`, `matkhau`, `diachi`, `createdAt`, `updatedAt`) VALUES
('1', 'QNHT', 'Ngô Hồng Thức', 'ngohongthuc0506@gmail.com', '0855090339', '123123', 'Cà Mau', '2023-06-23 08:01:30', '2023-06-23 08:01:30');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-diem.js'),
('create-giangvien.js'),
('create-hockies.js'),
('create-hocphi.js'),
('create-khoa.js'),
('create-lop.js'),
('create-lophoc.js'),
('create-monhoc.js'),
('create-monhocnguyenvong.js'),
('create-monhoctochuc.js'),
('create-phieuDKMH.js'),
('create-quantrivien.js'),
('create-sinhvien.js');

-- --------------------------------------------------------

--
-- Table structure for table `sinhviens`
--

CREATE TABLE `sinhviens` (
  `id` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `mslop` varchar(255) DEFAULT NULL,
  `tensv` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sodienthoai` varchar(255) DEFAULT NULL,
  `matkhau` varchar(255) DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `noisinh` varchar(255) DEFAULT NULL,
  `ngaysinh` varchar(255) DEFAULT NULL,
  `gioitinh` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sinhviens`
--

INSERT INTO `sinhviens` (`id`, `mssv`, `mslop`, `tensv`, `email`, `sodienthoai`, `matkhau`, `diachi`, `noisinh`, `ngaysinh`, `gioitinh`, `avatar`, `createdAt`, `updatedAt`) VALUES
('5ee26a50-34c7-4827-b324-0d57c64f92fc', 'DH52200123', 'D23_TH03', 'ABC', 'BCA', '123123123', '123123', 'CAB', 'BBA', '2004-01-01', 'Nam', 'hay.jpg', '2023-07-15 05:49:46', '2023-07-15 05:49:46'),
('97969013-4eaf-49c0-b523-618632340087', 'DH52300123', 'D23_TH03', 'Ngô Hồng Thức', 'ngohongthuc0506@gmail.com', '0855090339', '123123', 'HCM', 'Kiên Giang', '2005-06-05', 'Nam', '275242715_3121030134803405_7186135125750822733_n.jpg', '2023-06-25 07:04:33', '2023-07-16 15:17:29'),
('c2aa11b6-0169-46f0-8730-4145e94b8cfe', 'DH52300234', 'D23_TH04', 'Nguyen Van B', 'b@gmail.com', '123123123', '123123', 'HCM', 'HCM', '2005-02-02', 'Nam', 'fg-img.png', '2023-07-13 15:00:14', '2023-07-13 15:00:14'),
('c8e0f377-9b08-423e-a9ba-0e98670128fa', 'DH52300321', 'D23_TH03', 'asdjas', 'sakjdhsajk', '129312', '123123', 'jkchakdjh', 'sdhfsdjkf', '2005-10-10', 'Nam', 'khoa.jpg', '2023-06-26 02:22:09', '2023-06-26 02:22:09'),
('fd1580ac-adc7-4f51-99a4-66391814c176', 'DH52301234', 'D23_TH03', 'adhjaskhd', 'asjkdaskjdh', '1289312839', '123123', 'sdjhaskjda', 'sdjhkfdskj', '2005-10-10', 'Nữ', 'hay.jpg', '2023-06-26 07:06:51', '2023-06-26 07:06:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diems`
--
ALTER TABLE `diems`
  ADD PRIMARY KEY (`mssv`,`msmh`);

--
-- Indexes for table `giangviens`
--
ALTER TABLE `giangviens`
  ADD PRIMARY KEY (`msgiangvien`);

--
-- Indexes for table `hockies`
--
ALTER TABLE `hockies`
  ADD PRIMARY KEY (`mshocky`);

--
-- Indexes for table `hocphis`
--
ALTER TABLE `hocphis`
  ADD PRIMARY KEY (`mssv`,`msmh`);

--
-- Indexes for table `khoas`
--
ALTER TABLE `khoas`
  ADD PRIMARY KEY (`mskhoa`);

--
-- Indexes for table `lophocs`
--
ALTER TABLE `lophocs`
  ADD PRIMARY KEY (`mslop`,`mskhoa`);

--
-- Indexes for table `lops`
--
ALTER TABLE `lops`
  ADD PRIMARY KEY (`mslophoc`,`mssv`);

--
-- Indexes for table `monhocnguyenvongs`
--
ALTER TABLE `monhocnguyenvongs`
  ADD PRIMARY KEY (`msmh`,`mssv`);

--
-- Indexes for table `monhocs`
--
ALTER TABLE `monhocs`
  ADD PRIMARY KEY (`msmh`,`mshocky`);

--
-- Indexes for table `monhoctochucs`
--
ALTER TABLE `monhoctochucs`
  ADD PRIMARY KEY (`id`,`msmh`,`msgiangvien`);

--
-- Indexes for table `phieudkmhs`
--
ALTER TABLE `phieudkmhs`
  ADD PRIMARY KEY (`msmh`,`mssv`);

--
-- Indexes for table `quantriviens`
--
ALTER TABLE `quantriviens`
  ADD PRIMARY KEY (`msqtv`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `sinhviens`
--
ALTER TABLE `sinhviens`
  ADD PRIMARY KEY (`mssv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
