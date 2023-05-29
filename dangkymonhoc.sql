-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th5 29, 2023 lúc 02:13 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dangkymonhoc`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Hockies`
--

CREATE TABLE `Hockies` (
  `id` varchar(255) DEFAULT NULL,
  `mshocky` varchar(255) NOT NULL,
  `tenhocky` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Hockies`
--

INSERT INTO `Hockies` (`id`, `mshocky`, `tenhocky`, `createdAt`, `updatedAt`) VALUES
('1032f5bb-2f6d-446c-afcb-d6a9285ab01e', 'HK1', 'Học kỳ 1', '2023-05-08 09:33:30', '2023-05-08 09:33:30'),
('e51a3d2a-cd50-4e3b-8fff-169828fe846a', 'HK2', 'Học kỳ 2', '2023-05-08 09:33:35', '2023-05-08 09:33:35'),
('44e6ca9f-e835-4450-bb46-56c99f20adfd', 'HK3', 'Học kỳ 3', '2023-05-10 04:07:29', '2023-05-10 04:07:29'),
('6fda1096-b409-40f4-a7a1-6c2fbd7b4d8f', 'HK4', 'Học kỳ 4', '2023-05-10 04:07:34', '2023-05-10 04:07:34'),
('96de231b-5c85-41d1-9d42-dfc979534cba', 'HK5', 'Học kỳ 5', '2023-05-10 04:07:41', '2023-05-10 04:07:41'),
('44aedd3d-1992-49de-b194-5aed527260d2', 'HK6', 'Học kỳ 6', '2023-05-10 04:07:47', '2023-05-10 04:07:47'),
('1f945834-f463-45a7-b5be-c2b2e9c7d7d7', 'HK7', 'Học kỳ 7', '2023-05-10 04:07:52', '2023-05-10 04:07:52'),
('87afd341-203c-45a9-9483-db3fb61139ce', 'HK8', 'Học kỳ 8', '2023-05-10 04:07:57', '2023-05-10 04:07:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Khoas`
--

CREATE TABLE `Khoas` (
  `id` varchar(255) DEFAULT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `tenkhoa` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Khoas`
--

INSERT INTO `Khoas` (`id`, `mskhoa`, `tenkhoa`, `createdAt`, `updatedAt`) VALUES
('730604ce-f569-4b19-b996-326b782d2493', '0', 'Tất cả', '2023-05-02 13:06:08', '2023-05-02 13:06:08'),
('5dbe70ac-f8e4-44ac-bcfa-8f0fe920aa7c', '2', 'Cơ Khí', '2023-05-09 07:21:19', '2023-05-09 07:21:19'),
('51d7271c-c8fc-48d6-8fd1-248c8d490fc0', '5', 'Công nghệ thông tin', '2023-05-02 13:06:15', '2023-05-02 13:06:15'),
('f6a9c701-6695-45f3-bf42-22f33f1f1339', '7', 'Quản trị kinh doanh', '2023-05-02 13:06:21', '2023-05-02 13:06:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Lophocs`
--

CREATE TABLE `Lophocs` (
  `id` varchar(255) DEFAULT NULL,
  `mslop` varchar(255) NOT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `tenlop` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Lophocs`
--

INSERT INTO `Lophocs` (`id`, `mslop`, `mskhoa`, `tenlop`, `createdAt`, `updatedAt`) VALUES
('99cfa801-1e6b-4c12-adaa-4d57eec24f25', 'KD01', '7', 'Kinh doanh 01', '2023-05-02 13:06:49', '2023-05-02 13:06:49'),
('8d0e7656-9b69-41be-b767-2c73454ca718', 'TH01', '5', 'Tin học 01', '2023-05-02 13:06:30', '2023-05-02 13:06:30'),
('bd28453b-86dd-47ed-b104-4539793b3a8c', 'TH02', '5', 'Tin học 02', '2023-05-02 13:06:38', '2023-05-02 13:06:38');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Lops`
--

CREATE TABLE `Lops` (
  `id` varchar(255) DEFAULT NULL,
  `mslophoc` varchar(255) NOT NULL,
  `mssv` varchar(255) NOT NULL,
  `tenlophoc` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `MonHocNguyenVongs`
--

CREATE TABLE `MonHocNguyenVongs` (
  `id` varchar(255) DEFAULT NULL,
  `msmh` varchar(255) NOT NULL,
  `mssv` varchar(255) NOT NULL,
  `hocphi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `MonHocNguyenVongs`
--

INSERT INTO `MonHocNguyenVongs` (`id`, `msmh`, `mssv`, `hocphi`, `createdAt`, `updatedAt`) VALUES
('c8c27566-fd02-4277-961b-5eac506d018a', 'CS03001', 'DH51700924', '1226000', '2023-05-27 06:48:50', '2023-05-27 06:48:50'),
('aeab4f7d-bbdf-4183-ba06-9364c9e21f81', 'CS03001', 'DH52000123', '1226000', '2023-05-27 07:09:59', '2023-05-27 07:09:59'),
('06b87eff-266e-420b-9b4e-65f84d864276', 'CS03005', 'DH51700924', '1839000', '2023-05-27 07:17:32', '2023-05-27 07:17:32'),
('31162587-1c5c-43b1-84ce-b0e65545222f', 'CS03005', 'DH52000123', '1839000', '2023-05-27 07:15:13', '2023-05-27 07:15:13'),
('ca13d581-d73b-4bf8-bacd-06f48802ff72', 'CS03014', 'DH51700924', '1226000', '2023-05-27 07:25:58', '2023-05-27 07:25:58'),
('029f9c09-5e2a-4953-97b8-dc05179fafda', 'CS03014', 'DH52000123', '1226000', '2023-05-27 07:26:13', '2023-05-27 07:26:13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Monhocs`
--

CREATE TABLE `Monhocs` (
  `id` varchar(255) DEFAULT NULL,
  `msmh` varchar(255) NOT NULL,
  `tenmh` varchar(255) DEFAULT NULL,
  `sotinchi` varchar(255) DEFAULT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `mshocky` varchar(255) NOT NULL,
  `mota` varchar(255) DEFAULT NULL,
  `songhanh` varchar(255) DEFAULT NULL,
  `sotiet` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Monhocs`
--

INSERT INTO `Monhocs` (`id`, `msmh`, `tenmh`, `sotinchi`, `mskhoa`, `mshocky`, `mota`, `songhanh`, `sotiet`, `createdAt`, `updatedAt`) VALUES
('9aa37fee-76fb-48ca-b81c-d1ac8808cd74', 'CS02029', 'ĐA Chuyên ngành', '2', '5', 'HK7', 'BB', '0', '90', '2023-05-24 10:00:32', '2023-05-24 10:00:32'),
('add0d717-3934-4a77-9ea6-9ae5cbd555a0', 'CS03001', 'Kỹ thuật số', '2', '5', 'HK2', 'BB', '1', '30', '2023-05-24 09:39:37', '2023-05-24 09:40:09'),
('9df63f54-abba-4c44-9abc-bc98af6612dc', 'CS03002', 'TN Kỹ thuật số', '1', '5', 'HK2', 'BB', '1', '30', '2023-05-24 09:40:04', '2023-05-24 09:40:04'),
('86d702ac-cb50-436a-baf1-50e5f3f5b982', 'CS03003', 'Kỹ thuật lập trình', '3', '5', 'HK3', 'BB', '1', '45', '2023-05-24 09:40:33', '2023-05-24 09:40:33'),
('d3763987-8fda-483c-9b1e-f611d4108726', 'CS03004', 'TH Kỹ thuật lập trình', '1', '5', 'HK3', 'BB', '1', '30', '2023-05-24 09:41:01', '2023-05-24 09:41:01'),
('2f5a6db4-1fd4-44fe-bd17-f66fc138318b', 'CS03005', 'Toán tin học', '3', '5', 'HK3', 'BB', '0', '45', '2023-05-24 09:41:25', '2023-05-24 09:41:25'),
('42817d4e-4517-4dfa-9023-2e899a488b26', 'CS03006', 'Nhập môn công tác kỹ sư', '1', '5', 'HK4', 'BB', '0', '15', '2023-05-10 04:15:04', '2023-05-10 04:15:04'),
('87397384-8098-411f-84c0-4cb953912ce4', 'CS03007', 'Cấu trúc dữ liệu và thuật giải', '3', '5', 'HK4', 'BB', '1', '45', '2023-05-24 09:41:59', '2023-05-24 09:41:59'),
('3df89abe-2a63-4582-9ea7-89c252c4a7d3', 'CS03008', 'Cơ sở dữ liệu', '3', '5', 'HK4', 'BB', '1', '45', '2023-05-24 09:42:33', '2023-05-24 09:42:33'),
('6f1e5107-fa78-44da-8b61-2578b4d88e05', 'CS03009', 'Hệ điều hành', '3', '5', 'HK4', 'BB', '1', '45', '2023-05-24 09:42:57', '2023-05-24 09:42:57'),
('18e94b78-be24-4ff3-bd7b-2f42b934e856', 'CS03010', 'TH Cấu trúc dữ liệu và thuật giải', '1', '5', 'HK4', 'BB', '1', '30', '2023-05-24 09:43:29', '2023-05-24 09:43:29'),
('39c6aed6-ac65-4671-bec7-e05816efb682', 'CS03011', 'TH Cơ sở dữ liệu', '1', '5', 'HK4', 'BB', '1', '30', '2023-05-24 09:43:50', '2023-05-24 09:43:50'),
('f3e7bfc5-98b1-4638-9f5b-18e720426848', 'CS03012', 'TH Hệ điều hành', '1', '5', 'HK4', 'BB', '1', '30', '2023-05-24 09:44:10', '2023-05-24 09:44:10'),
('3bca1687-a85b-4349-9bd5-b2fdf193f336', 'CS03013', 'Công nghệ phần mềm', '3', '5', 'HK5', 'BB', '0', '45', '2023-05-24 09:44:39', '2023-05-24 09:44:39'),
('ef4fa801-f77e-4125-a3f9-c45b7037f508', 'CS03014', 'ĐA tin học', '2', '5', 'HK5', 'BB', '0', '90', '2023-05-24 09:45:50', '2023-05-24 09:45:50'),
('6b8a5514-8780-4d20-93bf-992349aa819c', 'CS03015', 'Lập trình hướng đối tượng', '3', '5', 'HK5', 'BB', '1', '45', '2023-05-24 09:46:32', '2023-05-24 09:46:32'),
('bdcd343e-eb75-470b-b84c-5ca73f998006', 'CS03016', 'TH Lập trình hướng đối tượng', '1', '5', 'HK5', 'BB', '1', '30', '2023-05-24 09:46:56', '2023-05-24 09:46:56'),
('06032938-60b0-47f5-8aec-c3710738f3c3', 'CS03017', 'Lập trình ứng dựng cơ sở dữ liệu', '3', '5', 'HK6', 'BB', '1', '45', '2023-05-24 09:55:04', '2023-05-24 09:55:04'),
('7e42777a-f639-4c67-9ab6-bbdfdf133b00', 'CS03018', 'Môn tự chọn 1_Chuyên ngành', '3', '5', 'HK6', 'TC', '0', '45', '2023-05-24 09:55:40', '2023-05-24 09:55:40'),
('56a55769-c1e5-4b00-83ce-59793f40ba60', 'CS03019', 'Môn tự chọn 2_Chuyên ngành', '3', '5', 'HK6', 'TC', '0', '60', '2023-05-24 09:56:11', '2023-05-24 09:56:11'),
('90660c10-68e4-4884-ad06-074e8158bda7', 'CS03020', 'Quản trị cơ sở dữ liệu', '3', '5', 'HK6', 'BB', '1', '45', '2023-05-24 09:56:55', '2023-05-24 09:56:55'),
('76bd6b7a-bfaa-40c4-8cd5-b8ecb7b8a2e7', 'CS03021', 'Semina nghề nghiệp', '1', '5', 'HK6', 'BB', '0', '30', '2023-05-24 09:57:13', '2023-05-24 09:57:13'),
('b4ef8255-8a4a-4d1a-9f7d-18de1dac92d9', 'CS03022', 'Quản lý dự án', '3', '5', 'HK6', 'TC', '0', '45', '2023-05-24 10:09:44', '2023-05-24 10:09:44'),
('d68b7201-2c1b-40d1-9c6f-732e9c21211a', 'CS03023', 'Thương mại điện tử', '3', '5', 'HK6', 'TC', '0', '45', '2023-05-24 10:12:11', '2023-05-24 10:12:11'),
('9a917d2d-a8bc-4855-86e8-fae8abcf75ac', 'CS03024', 'An ninh máy tính', '2', '5', 'HK6', 'TC', '1', '30', '2023-05-24 10:10:41', '2023-05-24 10:10:55'),
('3048b39a-f01a-48db-9b8a-2a3712e3c9a0', 'CS03025', 'Thực tập An ninh máy tính', '1', '5', 'HK6', 'TC', '1', '30', '2023-05-24 10:11:24', '2023-05-24 10:11:24'),
('b17f7abe-f005-48cc-96c9-39c815c32ff2', 'CS03026', 'Mã hoá ứng dụng', '3', '5', 'HK6', 'TC', '0', '45', '2023-05-24 10:10:03', '2023-05-24 10:10:03'),
('b5446bf8-72c2-4abd-be93-005f2ddc70a1', 'CS03027', 'TH Hệ quản trị cơ sở dữ liệu', '1', '5', 'HK6', 'BB', '1', '30', '2023-05-24 09:58:01', '2023-05-24 09:58:01'),
('3f4b0f6e-0eb6-4eba-9f9e-d815c435e593', 'CS03028', 'TH Lập trình ứng dụng cơ sở dữ liệu', '1', '5', 'HK6', 'BB', '1', '30', '2023-05-24 10:00:19', '2023-05-24 10:00:19'),
('6e415595-43b7-436a-ac68-120cadf932de', 'CS03030', 'ĐA Phân tích thiết kế HTTT', '2', '5', 'HK7', 'BB', '0', '90', '2023-05-24 10:00:59', '2023-05-24 10:00:59'),
('d4ae67dc-6a75-46e5-ae1a-772f323c2486', 'CS03033', 'Phát triển phần mềm nguồn mở', '3', '5', 'HK7', 'BB', '1', '45', '2023-05-24 10:03:36', '2023-05-24 10:03:36'),
('00c55720-80a0-4980-a3b8-893218874ce6', 'CS03034', 'TH Phát triển phần mềm nguồn mở', '1', '5', 'HK7', 'BB', '1', '30', '2023-05-24 10:04:06', '2023-05-24 10:04:06'),
('c1d4a69f-b6f7-4d0d-8e68-78767d052a9c', 'CS03036', 'Lập trình Web', '3', '5', 'HK7', 'TC', '1', '45', '2023-05-24 10:14:43', '2023-05-24 10:14:43'),
('551917ac-fe52-403c-aac5-2d8b135baa70', 'CS03038', 'Lập trình cho thiết bị di động', '3', '5', 'HK7', 'TC', '1', '45', '2023-05-24 10:16:26', '2023-05-24 10:16:26'),
('8a8b2336-e2cb-4554-8b00-8602b15ec2f4', 'CS03039', 'TH Lập trình Web', '1', '5', 'HK7', 'TC', '1', '30', '2023-05-24 10:15:38', '2023-05-24 10:15:38'),
('d3235e4e-d0db-4179-a0b7-7d5f02cf4458', 'CS03040', 'TH Lập trình Windows', '1', '5', 'HK7', 'TC', '1', '30', '2023-05-24 10:16:47', '2023-05-24 10:16:47'),
('cc69d889-84fd-4e40-b17c-d68073f30203', 'CS03041', 'TH Lập trình cho thiết bị di động', '1', '5', 'HK7', 'TC', '1', '30', '2023-05-24 10:17:14', '2023-05-24 10:17:14'),
('bc1228bc-d5d6-43c9-b5c9-1eef486b8da4', 'CS03042', 'Triển khai hệ thống tông tin', '3', '5', 'HK8', 'BB', '0', '45', '2023-05-24 10:06:54', '2023-05-24 10:06:54'),
('f389075d-2b6c-4264-af44-aa610d9c7968', 'CS03043', 'Xây dựng phần mền Web', '3', '5', 'HK8', 'BB', '0', '45', '2023-05-24 10:06:01', '2023-05-24 10:06:01'),
('883bad7a-1396-48f0-a3e0-20602ef422b8', 'CS03044', 'Xâu dựng phần mềm Windows', '3', '5', 'HK8', 'BB', '0', '45', '2023-05-24 10:05:34', '2023-05-24 10:05:34'),
('88dbde59-05a6-4a90-8db4-2970f3c98fe1', 'CS03050', 'Môn học tự chọn 3_Chuyên ngành', '3', '5', 'HK7', 'TC', '0', '45', '2023-05-24 10:01:26', '2023-05-24 10:01:26'),
('20fc0ced-840a-41e8-b260-97e541111e19', 'CS03051', 'Môn học tự chọn 4_Chuyên ngành', '3', '5', 'HK7', 'TC', '0', '45', '2023-05-24 10:02:02', '2023-05-24 10:02:02'),
('5ae3ff58-237b-4f49-b55e-0f356fe91ab0', 'CS03052', 'Môn học tự chọn 5_Chuyên ngành', '1', '5', 'HK7', 'TC', '0', '30', '2023-05-24 10:02:33', '2023-05-24 10:02:33'),
('69d50f85-0566-4902-87fa-6914e279e79c', 'CS03053', 'Môn học tự chọn 6_Chuyên ngành', '1', '5', 'HK7', 'TC', '0', '30', '2023-05-24 10:03:03', '2023-05-24 10:03:03'),
('e4a5390e-b2f6-4f51-a2c9-41f600ec3734', 'CS03151', 'Thực tập tốt nghiệp', '2', '0', 'HK8', 'TN', '0', '90', '2023-05-24 10:08:29', '2023-05-24 10:08:29'),
('374aaf3e-804a-4809-91cd-2881a57eba53', 'CS03153', 'ĐA/Khoa luận tốt nghiệp', '5', '0', 'HK8', 'TN', '0', '225', '2023-05-24 10:09:17', '2023-05-24 10:09:17'),
('3e43de41-6364-4ca7-a1cb-60b3b19e1d2c', 'CS09001', 'Nhập môn lập trình', '3', '5', 'HK2', 'BB', '1', '45', '2023-05-24 09:47:30', '2023-05-24 09:47:30'),
('6e402ac1-e1d3-43b3-9daf-8554c25c1520', 'CS09002', 'TH Nhập môn lập trình', '1', '5', 'HK2', 'BB', '1', '30', '2023-05-24 09:48:03', '2023-05-24 09:48:03'),
('99ee6938-1dee-48e4-8934-c652dd4059cf', 'CS09003', 'Nhập môn Web và ứng dụng', '3', '5', 'HK5', 'BB', '1', '45', '2023-05-24 09:48:31', '2023-05-24 09:48:31'),
('5fad8c45-4f5d-4b08-8785-3598863be51d', 'CS09004', 'TH Nhập môn Web và ứng dụng', '1', '5', 'HK5', 'BB', '1', '30', '2023-05-24 09:48:48', '2023-05-24 09:48:48'),
('c40f1c8a-a8d1-46fb-801a-47fe03cc0a5c', 'CS09005', 'Nhập môn cấu trúc dữ liệu', '3', '5', 'HK3', 'BB', '1', '45', '2023-05-24 09:49:42', '2023-05-24 09:50:17'),
('8e98e09f-8077-46f3-a867-1453569e6feb', 'CS09006', 'Tổ chức cấu trúc máy tính', '3', '5', 'HK3', 'BB', '1', '45', '2023-05-24 09:50:42', '2023-05-24 09:50:42'),
('5c267fa9-43b6-4be2-a4af-2727c3b23f62', 'CS09007', 'TH Nhập môn cấu trúc dữ liệu', '1', '5', 'HK3', 'BB', '1', '30', '2023-05-24 09:51:10', '2023-05-24 09:51:10'),
('7cd44a3d-3768-488d-bdf6-2e27c0ef067e', 'CS09009', 'Mạng máy tính', '3', '5', 'HK5', 'BB', '0', '45', '2023-05-24 09:52:39', '2023-05-24 09:52:39'),
('f249b46f-f38f-4d71-80e8-5aed63baed08', 'CS09010', 'Phân tích thiết kế HTTT', '3', '5', 'HK7', 'BB', '0', '45', '2023-05-24 10:04:45', '2023-05-24 10:04:45'),
('f70444dd-0894-4e9e-bfff-0ae256fbc773', 'CS09011', 'Quản trị mạng', '3', '5', 'HK6', 'BB', '0', '45', '2023-05-24 09:59:05', '2023-05-24 09:59:05'),
('7523b2f7-8f99-4a9c-b485-a65fe139bdb9', 'CS3037', 'Lập trình Windows', '3', '5', 'HK7', 'TC', '1', '45', '2023-05-24 10:15:10', '2023-05-24 10:15:10'),
('fd3fb460-0b28-4f6c-9281-0e53371fc467', 'GS09010', 'Môn tự chọn 1_KHXHNV', '2', '5', 'HK7', 'TC', '0', '30', '2023-05-10 04:15:50', '2023-05-10 04:15:50'),
('dd083b5c-e770-4964-8bf4-2f6799a347e4', 'GS09011', 'KHXHNV_Đại cương văn hoá VN', '2', '0', 'HK7', 'TC', '0', '30', '2023-05-24 10:12:57', '2023-05-24 10:12:57'),
('d4342b50-d3f4-472e-923e-ee7f6b147fd5', 'GS09012', 'KHXHNV_Kỹ năng giao tiếp', '3', '0', 'HK7', 'TC', '0', '45', '2023-05-24 10:13:30', '2023-05-24 10:13:30'),
('855054d7-189f-4d68-b833-e4befc988804', 'GS09013', 'KHXHNV_Phương pháp luận sáng tạo', '2', '0', 'HK7', 'TC', '0', '30', '2023-05-24 10:14:03', '2023-05-24 10:14:03'),
('64473d44-29e2-4d27-855b-bb8a8ad25bfb', 'GS19001', 'Tiếng anh 1', '2', '0', 'HK1', 'BB', '0', '45', '2023-05-10 04:16:19', '2023-05-10 04:16:19'),
('643bf329-8d1a-4ab3-b33a-373f8f51b1a5', 'GS19002', 'Tiếng anh 2', '2', '0', 'HK2', 'BB', '0', '45', '2023-05-10 04:16:33', '2023-05-10 04:16:33'),
('d5cedb26-93ac-4855-af7b-ce7624094730', 'GS19003', 'Tiếng anh 3', '2', '0', 'HK3', 'BB', '0', '45', '2023-05-10 04:16:46', '2023-05-10 04:16:46'),
('d09301b8-d739-428e-8e2e-0254cab73751', 'GS19004', 'Tiếng anh 4', '2', '0', 'HK4', 'BB', '0', '45', '2023-05-10 04:17:06', '2023-05-10 04:17:06'),
('2bbbcfe7-d1bf-4cda-a6fc-7b325704a725', 'GS29001', 'Pháp luật đại cương', '3', '0', 'HK3', 'BB', '0', '45', '2023-05-24 08:46:36', '2023-05-24 08:46:36'),
('8306a3c2-6e9e-48b6-b16e-4b55667b39bb', 'GS33001', 'Toán A1 (Hàm 1 biến, chuỗi)', '4', '5', 'HK1', 'BB', '0', '60', '2023-05-10 04:09:37', '2023-05-10 04:09:37'),
('ad54d0d1-1435-42ea-b811-02ca1c1e943f', 'GS33002', 'Toán A2 (Hàm nhiều biến, giải tích vector)', '4', '5', 'HK2', 'BB', '0', '60', '2023-05-10 04:10:16', '2023-05-10 04:10:16'),
('18eb303d-bd1b-4ad1-8e53-f586cbc9e7a5', 'GS33003', 'Toán A3 (Đại số tuyến tính)', '3', '5', 'HK3', 'BB', '0', '45', '2023-05-10 04:10:38', '2023-05-10 04:10:38'),
('2fdeea0e-a004-466b-9c99-a6bd18ba1b55', 'GS43001', 'Vật lý 1', '3', '0', 'HK1', 'BB', '1', '45', '2023-05-10 04:11:45', '2023-05-10 04:11:45'),
('e5603180-8426-4e94-942b-8081592a5d82', 'GS43002', 'Vật lý 2', '4', '0', 'HK2', 'BB', '1', '60', '2023-05-10 04:12:10', '2023-05-10 04:12:10'),
('8316b5d1-6943-4f61-8749-7723366dc630', 'GS49004', 'TN Vật lý_Phần 1', '1', '0', 'HK1', 'BB', '1', '30', '2023-05-10 04:12:44', '2023-05-10 04:12:44'),
('c02ef2e4-a554-4109-bf1b-a51bea7545e6', 'GS49005', 'TN Vật lý_Phần 2', '1', '0', 'HK2', 'BB', '1', '30', '2023-05-10 04:13:06', '2023-05-10 04:13:06'),
('36e0dd8b-55a1-4745-bed7-6c0f53639422', 'GS59001', 'Tin học đại cương', '2', '0', 'HK1', 'BB', '1', '30', '2023-05-10 04:13:35', '2023-05-10 04:13:35'),
('2604e3cd-def7-4d14-833b-494dae269e6f', 'GS59002', 'TH Tin học đại cương', '2', '0', 'HK1', 'BB', '1', '45', '2023-05-10 04:14:01', '2023-05-10 04:14:01'),
('8855036a-9fc9-435c-a8db-b575c557bb46', 'GS79001', 'Những nguyên lý CB CN Mác - Lênin', '4', '0', 'HK2', 'BB', '0', '75', '2023-05-24 09:36:23', '2023-05-24 09:36:23'),
('d244a44c-0cb5-4c7e-89d8-532f08fd5134', 'GS79002', 'Tư tưởng Hồ Chí Minh', '2', '0', 'HK3', 'BB', '0', '30', '2023-05-24 09:36:49', '2023-05-24 09:36:49'),
('05b896a1-919b-4f40-9c1a-705606fd285e', 'GS79003', 'Đường lối CM của đảng CS VN', '3', '0', 'HK4', 'BB', '0', '45', '2023-05-24 09:37:28', '2023-05-24 09:37:28'),
('f0b3aec6-53c9-463d-ba15-e4ba0b42856b', 'GS79004', 'Lý luận chính trị cuối khoá', '0', '0', 'HK8', 'TN', '0', '30', '2023-05-24 10:07:42', '2023-05-24 10:07:42'),
('1670a855-9dba-472b-bd01-3e0c78b9023d', 'GS99001', 'Giáo dục thể chất 1', '0', '0', 'HK1', 'BB', '0', '30', '2023-05-10 04:06:42', '2023-05-10 04:06:42'),
('d44e2ba6-fac0-4611-b424-1ce62cad2700', 'GS99002', 'Giáo dục thể chất 2', '0', '0', 'HK1', 'BB', '0', '30', '2023-05-10 04:07:00', '2023-05-10 04:07:00'),
('cafdc65b-69a4-4327-b80c-0d2f60c7afd2', 'GS99003', 'Giáo dục thể chất 3', '0', '0', 'HK3', 'BB', '0', '30', '2023-05-10 04:08:10', '2023-05-10 04:08:10'),
('c583f451-fa2c-4a3d-a26a-50d02a3c729a', 'GS99004', 'Giáo dục thể chất 4', '0', '0', 'HK3', 'BB', '0', '30', '2023-05-10 04:08:27', '2023-05-10 04:08:39'),
('39abb882-1063-4a01-aafd-721f12dd3a8b', 'MI03002', 'Giáo dục quốc phòng (ĐH)', '0', '0', 'HK4', 'BB', '0', '165', '2023-05-10 04:09:07', '2023-05-10 04:09:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Monhoctochucs`
--

CREATE TABLE `Monhoctochucs` (
  `id` varchar(255) DEFAULT NULL,
  `mshocky` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Monhoctochucs`
--

INSERT INTO `Monhoctochucs` (`id`, `mshocky`, `msmh`, `createdAt`, `updatedAt`) VALUES
('3518b794-d6d5-4732-a2e0-f5f79bfd8f41', 'HK1', 'GS19001', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('3e388d9d-0519-4973-9d0b-082cb28780db', 'HK1', 'GS33001', '2023-05-10 04:18:15', '2023-05-10 04:18:15'),
('7048fbf5-1549-4d5e-a851-a4ab8ba26cdb', 'HK1', 'GS43001', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('f7415674-95ee-461f-8962-7df0165f50cd', 'HK1', 'GS49004', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('0d58def7-9bcc-4a25-981c-ec5cad31c692', 'HK1', 'GS59001', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('607907c9-08bd-4477-aec7-eb7472dd5fe6', 'HK1', 'GS59002', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('f61a6973-de96-4527-a59e-2442ca8807a6', 'HK1', 'GS99001', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('5b532ec2-4847-43de-b07f-3841a981915d', 'HK1', 'GS99002', '2023-05-10 04:18:03', '2023-05-10 04:18:03'),
('3fd9f569-e606-4e3c-8093-3e5b15c3029d', 'HK3', 'GS19003', '2023-05-24 08:48:30', '2023-05-24 08:48:30'),
('91b8bb98-ffac-45fb-8420-d87adacf245d', 'HK3', 'GS29001', '2023-05-24 08:48:30', '2023-05-24 08:48:30'),
('3e814581-b0ec-47dd-9e42-be67d3fd4717', 'HK3', 'GS33003', '2023-05-24 08:48:30', '2023-05-24 08:48:30'),
('f0650910-213c-4bb2-9391-525b158fbf3e', 'HK3', 'GS99003', '2023-05-24 08:48:30', '2023-05-24 08:48:30'),
('a26f1f1f-5e51-498f-b916-ef309f491f4e', 'HK3', 'GS99004', '2023-05-24 08:48:30', '2023-05-24 08:48:30'),
('70979bc1-0c2a-4f0c-994e-dd6cfc4bb630', 'HK5', 'CS03013', '2023-05-24 10:18:36', '2023-05-24 10:18:36'),
('fa867dca-c359-4dfe-b618-66868c1ae5d8', 'HK5', 'CS03014', '2023-05-24 10:18:36', '2023-05-24 10:18:36'),
('e480520f-bcc7-4807-92a7-98f0e85c1404', 'HK5', 'CS03015', '2023-05-24 10:18:37', '2023-05-24 10:18:37'),
('8573e7dc-c4db-4cd8-a818-ddd1294cac5c', 'HK5', 'CS03016', '2023-05-24 10:18:37', '2023-05-24 10:18:37'),
('60439533-8dfc-4b86-a6a7-463f5dde393b', 'HK5', 'CS09003', '2023-05-24 10:18:37', '2023-05-24 10:18:37'),
('13e28214-f500-48bf-a390-0742ae890ad9', 'HK5', 'CS09004', '2023-05-24 10:18:37', '2023-05-24 10:18:37'),
('71d2ab07-e7f6-4190-b1f3-55f957f6a710', 'HK5', 'CS09009', '2023-05-24 10:18:37', '2023-05-24 10:18:37'),
('19030bd5-9f41-43f4-82b6-2dcfe3b2e1a0', 'HK7', 'CS02029', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('d5a0faca-7421-4e90-b5e1-f6b954e70255', 'HK7', 'CS03030', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('8060784e-dd82-4a0d-af7c-f11bb7db8bcf', 'HK7', 'CS03033', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('8094a9b2-8432-40a4-b9e1-d8727836ca6c', 'HK7', 'CS03034', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('065a7fda-f57b-4120-98e2-1a0c9ea3ba52', 'HK7', 'CS03036', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('e282abf9-8d84-4c1d-a616-a2d73df22987', 'HK7', 'CS03038', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('815f3c07-f2de-44b8-aee9-b7e8979e9e1a', 'HK7', 'CS03039', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('81abb50e-7101-4182-9564-a9bfd90e852b', 'HK7', 'CS03040', '2023-05-24 10:20:20', '2023-05-24 10:20:20'),
('34e03dc5-fec5-467f-bf3e-bdba24e98c67', 'HK7', 'CS3037', '2023-05-24 10:20:20', '2023-05-24 10:20:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PhieuDKMHs`
--

CREATE TABLE `PhieuDKMHs` (
  `id` varchar(255) DEFAULT NULL,
  `msmh` varchar(255) NOT NULL,
  `mssv` varchar(255) NOT NULL,
  `hocphi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `PhieuDKMHs`
--

INSERT INTO `PhieuDKMHs` (`id`, `msmh`, `mssv`, `hocphi`, `createdAt`, `updatedAt`) VALUES
('7bf8151e-b203-4321-b0e1-5d5a5eedf3a3', 'GS19003', 'DH52211012', '1226000', '2023-05-29 07:50:11', '2023-05-29 07:50:11'),
('982d5a02-a4e9-490f-a154-96a40dedbf60', 'GS33003', 'DH52211012', '1839000', '2023-05-29 07:50:11', '2023-05-29 07:50:11'),
('8b1b092b-a61d-4aef-bdbb-c8c543dbce93', 'GS99004', 'DH51700924', '0', '2023-05-29 08:30:00', '2023-05-29 08:30:00'),
('7a4e5427-97b5-44b9-9504-6bf8fdab1d2b', 'GS99004', 'DH52211012', '0', '2023-05-29 08:16:48', '2023-05-29 08:16:48');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Quantriviens`
--

CREATE TABLE `Quantriviens` (
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
-- Đang đổ dữ liệu cho bảng `Quantriviens`
--

INSERT INTO `Quantriviens` (`id`, `msqtv`, `tenqtv`, `email`, `sodienthoai`, `matkhau`, `diachi`, `createdAt`, `updatedAt`) VALUES
('1', 'QNHT', 'Ngô Hồng Thức', 'ngohongthuc0506@gmail.com', '0855090339', '123123', 'C13/2D ấp, 5A Nguyễn Văn Linh, Bình Hưng, Bình Chánh, Hồ Chí Minh', '2023-05-02 15:03:47', '2023-05-29 01:57:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('create-hockies.js'),
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
-- Cấu trúc bảng cho bảng `Sinhviens`
--

CREATE TABLE `Sinhviens` (
  `id` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `mslop` varchar(255) NOT NULL,
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
-- Đang đổ dữ liệu cho bảng `Sinhviens`
--

INSERT INTO `Sinhviens` (`id`, `mssv`, `mslop`, `tensv`, `email`, `sodienthoai`, `matkhau`, `diachi`, `noisinh`, `ngaysinh`, `gioitinh`, `avatar`, `createdAt`, `updatedAt`) VALUES
('d03121b1-cc22-482c-a9fe-b110cec5662c', 'DH51700924', 'TH02', 'Ngô Hồng Thức', 'ngohongthuc0506@gmail.com', '0855090339', '$2a$12$h2f2v3cxetYmWpEdhEIACupfO3fI5Km2rBpbvuUNmxT19qNcoV6oG', 'C13/2D ấp, 5A Nguyễn Văn Linh, Bình Hưng, Bình Chánh, Hồ Chí Minh', 'Vĩnh Thuận - Kiên Giang', '1999-06-05', 'Nam', '275242715_3121030134803405_7186135125750822733_n.jpg', '2023-05-16 04:00:45', '2023-05-29 08:25:35'),
('06893a31-d656-4e49-8286-4bd74e64b736', 'DH52000123', 'KD01', 'Nguyễn Văn B', 'nguyenvanA@gmail.com', '0921354687', '$2a$12$HlKLb34GnEym150IgVZvb.BBLfnc7WRKS62kILgJwQ6vFqwwxwEkC', 'p4, q8, HCM', 'Thới Bình, Cà Mau', '2020-12-12', 'Nữ', 'fg-img.png', '2023-05-24 08:49:27', '2023-05-29 06:52:29'),
('3c99365d-7240-4fa5-8385-c2008ffea4d9', 'DH52203002', 'KD01', 'Y', 'dasjkdhasj', '12312312', '$2a$12$FzHrepgXGdjXWZDYBAaXUuAxTtFhBkMZygk4O9HdgXCFZNhtQlh5G', 'saudiasudio', 'sdmnfsd', '2002-10-10', 'Nữ', 'khoa.jpg', '2023-05-29 09:21:50', '2023-05-29 10:44:35'),
('8adf348e-b80e-4e2a-bca5-b5d44b353ed4', 'DH52211012', 'KD01', 'Nguyen Thi C', 'cnguyen@gmail.com', '0921809551', '$2a$12$G834rKDu4fDUZKYNcacIauXoFZACyZNJBqdTmoXaNrtWsdI7/UGLC', 'Tra Vinh', 'Tra Vinh', '2022-10-10', 'Nam', '275242715_3121030134803405_7186135125750822733_n.jpg', '2023-05-25 10:09:18', '2023-05-29 09:19:55'),
('75b8ca7a-de5f-4b3a-9cab-9ccdc2e2e434', 'DH52300123', 'KD01', 'asdas', 'ajsdkahsd', '1312930128', '$2a$12$VRrTbQe3ZDDy861VUAkyyeWV4/rxnxqA08xVI9r76H8JkncLbZRVm', 'aksjdhasjkh', 'kjsjksdfh', '2005-12-12', 'Nam', 'hay.jpg', '2023-05-19 08:38:52', '2023-05-19 08:38:52');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `Hockies`
--
ALTER TABLE `Hockies`
  ADD PRIMARY KEY (`mshocky`);

--
-- Chỉ mục cho bảng `Khoas`
--
ALTER TABLE `Khoas`
  ADD PRIMARY KEY (`mskhoa`);

--
-- Chỉ mục cho bảng `Lophocs`
--
ALTER TABLE `Lophocs`
  ADD PRIMARY KEY (`mslop`,`mskhoa`);

--
-- Chỉ mục cho bảng `Lops`
--
ALTER TABLE `Lops`
  ADD PRIMARY KEY (`mslophoc`,`mssv`);

--
-- Chỉ mục cho bảng `MonHocNguyenVongs`
--
ALTER TABLE `MonHocNguyenVongs`
  ADD PRIMARY KEY (`msmh`,`mssv`);

--
-- Chỉ mục cho bảng `Monhocs`
--
ALTER TABLE `Monhocs`
  ADD PRIMARY KEY (`msmh`,`mskhoa`,`mshocky`);

--
-- Chỉ mục cho bảng `Monhoctochucs`
--
ALTER TABLE `Monhoctochucs`
  ADD PRIMARY KEY (`mshocky`,`msmh`);

--
-- Chỉ mục cho bảng `PhieuDKMHs`
--
ALTER TABLE `PhieuDKMHs`
  ADD PRIMARY KEY (`msmh`,`mssv`);

--
-- Chỉ mục cho bảng `Quantriviens`
--
ALTER TABLE `Quantriviens`
  ADD PRIMARY KEY (`msqtv`);

--
-- Chỉ mục cho bảng `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `Sinhviens`
--
ALTER TABLE `Sinhviens`
  ADD PRIMARY KEY (`mssv`,`mslop`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
