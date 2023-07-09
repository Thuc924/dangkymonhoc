-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th7 09, 2023 lúc 04:23 PM
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
-- Cấu trúc bảng cho bảng `Diems`
--

CREATE TABLE `Diems` (
  `id` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `quatrinh` varchar(255) NOT NULL,
  `giuaky` varchar(255) NOT NULL,
  `diemthi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Diems`
--

INSERT INTO `Diems` (`id`, `mssv`, `msmh`, `quatrinh`, `giuaky`, `diemthi`, `createdAt`, `updatedAt`) VALUES
('5f7b28e3-78b8-4a0c-9279-7b89b1ffbdf6', 'DH52300123', 'GS19001', '8', '7', '7', '2023-07-02 10:35:08', '2023-07-02 10:35:08'),
('4eb411d2-cb56-4a5d-8d10-fa231320ecac', 'DH52300321', 'GS19001', '8', '6', '8', '2023-07-02 10:34:51', '2023-07-02 10:34:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Giangviens`
--

CREATE TABLE `Giangviens` (
  `id` varchar(255) DEFAULT NULL,
  `msgiangvien` varchar(255) NOT NULL,
  `tengiangvien` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Giangviens`
--

INSERT INTO `Giangviens` (`id`, `msgiangvien`, `tengiangvien`, `createdAt`, `updatedAt`) VALUES
('f4802132-9383-4276-9e2a-a9241002a17e', 'GV1', 'T.T.Duy', '2023-06-19 06:50:09', '2023-06-19 06:50:09'),
('faab841b-ccdc-401e-bb19-32f831f94af3', 'GV2', 'N.H.Thuc', '2023-06-19 07:12:09', '2023-06-19 07:12:09'),
('c86bd0cf-7914-443f-8e58-07c9f93c892a', 'GV3', 'T.D.Khoa', '2023-06-19 07:12:29', '2023-06-19 07:12:29');

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
-- Cấu trúc bảng cho bảng `Hocphis`
--

CREATE TABLE `Hocphis` (
  `id` varchar(255) DEFAULT NULL,
  `mssv` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `hocphi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Hocphis`
--

INSERT INTO `Hocphis` (`id`, `mssv`, `msmh`, `hocphi`, `createdAt`, `updatedAt`) VALUES
('2b2e93ff-a746-4038-a36c-a00eddfb82b2', 'DH52300321', 'GS19001', '7392000', '2023-07-02 09:14:32', '2023-07-02 09:14:32');

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
('073973ed-138e-40ae-8be6-bb3204bb9308', '0', 'ALL', '2023-06-19 05:53:32', '2023-06-19 05:53:32'),
('18344808-ae3c-4fba-b1fc-51caf9c4fc33', '5', 'Công nghệ thông tin', '2023-06-19 05:48:49', '2023-06-19 05:48:49'),
('08299447-ecdd-46ec-9401-dd84f3d1c854', '7', 'Quản trị kinh doanh', '2023-06-23 06:41:26', '2023-06-23 06:41:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Lophocs`
--

CREATE TABLE `Lophocs` (
  `id` varchar(255) DEFAULT NULL,
  `mslop` varchar(255) NOT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Lophocs`
--

INSERT INTO `Lophocs` (`id`, `mslop`, `mskhoa`, `createdAt`, `updatedAt`) VALUES
('223c6531-cd1c-470f-86a7-ba5e5c933baa', 'D23_TH01', '5', '2023-06-25 07:03:36', '2023-06-25 07:03:36'),
('055b67fe-573b-4141-86d2-5de9ee46217a', 'D23_TH02', '5', '2023-06-25 07:03:47', '2023-06-25 07:03:47'),
('d93df05e-db04-461e-9de0-669f36a076a9', 'D23_TH03', '5', '2023-06-25 07:03:57', '2023-06-25 07:03:57'),
('d8daee3e-92d1-4a05-b4df-750582f329f2', 'D23_TH04', '5', '2023-07-01 08:31:15', '2023-07-01 08:31:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Lops`
--

CREATE TABLE `Lops` (
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
('e8bb8d2b-04b9-4c97-9114-c92a6ee3f24c', 'C360', 'ABC', '2', '7', 'HK1', 'BB', '0', '30', '2023-06-23 06:41:39', '2023-06-23 06:41:39'),
('487ec7d1-b5ec-490a-b2a7-fb0b308985d9', 'GS0001111', 'A', '3', '0', 'HK3', 'BB', '0', '45', '2023-07-04 08:58:07', '2023-07-04 08:59:19'),
('683529b5-5e81-432b-aebb-aee64a1b151f', 'GS19001', 'Tiếng Anh 1', '2', '0', 'HK1', 'BB', '0', '45', '2023-06-19 06:01:42', '2023-06-19 06:02:03'),
('6ee49b6d-3ed5-494b-8aa4-9fb638db214c', 'GS19002', 'Tiếng Anh 2', '2', '0', 'HK2', 'BB', '0', '45', '2023-06-19 06:01:59', '2023-06-19 06:01:59'),
('a184b77b-19bc-4d51-8852-c5ec8be01315', 'GS19003', 'Tiếng Anh 3', '2', '0', 'HK3', 'BB', '0', '45', '2023-06-19 06:02:35', '2023-06-19 06:02:35'),
('a9d404ae-0ff6-4dc0-bbcd-07d61c739183', 'GS33001', 'Toán A1 (Hàm 1 biến, chuỗi)', '4', '5', 'HK1', 'BB', '0', '60', '2023-06-19 05:56:49', '2023-06-19 06:02:07'),
('95bd3b12-6f8f-4456-ae10-a6b049d64c9e', 'GS33002', 'Toán A2 (Hàm nhiều biến, giải tích vec tơ)', '4', '5', 'HK2', 'BB', '0', '60', '2023-06-19 05:57:12', '2023-06-19 05:58:23'),
('a19101ed-2edf-4b09-9451-f8975e1a6a5f', 'GS33003', 'Toán A3 (Đại số tuyến tính)', '3', '5', 'HK3', 'BB', '0', '45', '2023-06-19 05:59:03', '2023-06-19 05:59:03'),
('2c4530be-489f-4fbe-b349-e42c38d54d10', 'GS43001', 'Vậy lý 1', '3', '0', 'HK1', 'BB', '1', '45', '2023-06-19 05:59:29', '2023-06-19 05:59:29'),
('2b486b5a-c0a9-49cb-ba52-72f02f672fc1', 'GS43002', 'Vậy lý 2', '4', '0', 'HK2', 'BB', '1', '60', '2023-06-19 05:59:46', '2023-06-19 05:59:46'),
('d82fdb7b-86c3-4452-b665-5f2402012682', 'GS49004', 'Thí nghiệm Vật lý_Phần 1', '1', '0', 'HK1', 'BB', '1', '30', '2023-06-19 06:00:07', '2023-06-19 06:00:07'),
('10bf7fd2-098d-4e8c-97b1-0e51bb1d1091', 'GS49005', 'Thí nghiệm Vật lý_Phần 2', '1', '0', 'HK2', 'BB', '1', '30', '2023-06-19 06:00:26', '2023-06-19 06:00:26'),
('f04c0891-9afd-4524-af5c-901a5911963e', 'GS59001', 'Tin học đại cương', '2', '0', 'HK1', 'BB', '1', '30', '2023-06-19 06:00:53', '2023-06-19 06:00:53'),
('dd8bf9d6-7c65-4f9b-9e66-510ccc0585e6', 'GS59002', 'TH Tin học đại cương', '2', '0', 'HK1', 'BB', '1', '45', '2023-06-19 06:01:14', '2023-06-19 06:01:14'),
('b2c99596-c239-4c4f-b450-00d6fa015806', 'GS93003', 'Giáo dục thể chất 3', '0', '0', 'HK3', 'BB', '0', '30', '2023-06-19 05:56:03', '2023-06-19 05:56:03'),
('fe0fb282-2404-4398-80f0-6ae12360f240', 'GS93004', 'Giáo dục thể chất 4', '0', '0', 'HK3', 'BB', '0', '30', '2023-06-19 05:56:23', '2023-06-19 05:56:23'),
('64afe228-b5e1-4e4e-9dde-a3bcc4c6087e', 'GS99001', 'Giáo dục thể chất 1', '0', '0', 'HK2', 'BB', '0', '30', '2023-06-19 05:55:12', '2023-06-19 05:55:12'),
('35e16566-2a1c-42d4-a808-5119d86b8626', 'GS99002', 'Giáo dục thể chất 2', '0', '0', 'HK2', 'BB', '0', '30', '2023-06-19 05:55:38', '2023-06-19 05:55:38'),
('eea86d21-be2c-4d60-88d3-05289424f21c', 'MI03002', 'Giáo dục quốc phòng (ĐH)', '0', '0', 'HK4', 'BB', '0', '165', '2023-06-19 05:53:52', '2023-06-19 05:53:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Monhoctochucs`
--

CREATE TABLE `Monhoctochucs` (
  `id` varchar(255) NOT NULL,
  `msmh` varchar(255) NOT NULL,
  `tengiangvien` varchar(255) NOT NULL,
  `mslophoc` varchar(255) NOT NULL,
  `mshocky` varchar(255) NOT NULL,
  `mskhoa` varchar(255) NOT NULL,
  `tenmh` varchar(255) NOT NULL,
  `siso` varchar(255) NOT NULL,
  `phanTramQT` varchar(255) NOT NULL,
  `phanTramGK` varchar(255) NOT NULL,
  `thu` varchar(255) NOT NULL,
  `tietbd` varchar(255) NOT NULL,
  `sotiet` varchar(255) NOT NULL,
  `phong` varchar(255) NOT NULL,
  `ngaybd` varchar(255) NOT NULL,
  `ngaykt` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `Monhoctochucs`
--

INSERT INTO `Monhoctochucs` (`id`, `msmh`, `tengiangvien`, `mslophoc`, `mshocky`, `mskhoa`, `tenmh`, `siso`, `phanTramQT`, `phanTramGK`, `thu`, `tietbd`, `sotiet`, `phong`, `ngaybd`, `ngaykt`, `createdAt`, `updatedAt`) VALUES
('10dfbf0f-1b71-4221-8d8f-eb5925f7900b', 'GS43001', 'N.H.Thuc', 'D23_TH03', 'HK1', '0', 'Vậy lý 1', '70', '0', '40', '5, 7', '3', '3', 'C703', '2023-08-10', '2024-02-10', '2023-07-01 09:18:33', '2023-07-01 09:18:33'),
('1c0a86cf-44d3-453e-a93b-d412ab8dc2ce', 'GS49004', 'T.D.Khoa', 'D23_TH04', 'HK1', '0', 'Thí nghiệm Vật lý_Phần 1', '40', '10', '20', '2, 6', '7', '3', 'D113', '2023-08-10', '2024-02-10', '2023-07-01 09:19:21', '2023-07-01 09:19:21'),
('4cad4817-0507-4650-96f4-eae97b5ce8a6', 'GS19002', 'N.H.Thuc', 'D23_TH04', 'HK2', '0', 'Tiếng Anh 2', '40', '10', '30', '3, 7', '1', '3', 'C803', '2023-08-10', '2024-02-10', '2023-07-04 08:20:05', '2023-07-04 08:20:05'),
('54d31d63-81fc-4012-9ee8-ebbfbd96e348', 'GS19001', 'T.T.Duy', 'D23_TH04', 'HK1', '0', 'Tiếng Anh 1', '40', '10', '30', '2, 4', '1', '3', 'C303', '2023-08-10', '2024-02-10', '2023-07-01 09:17:18', '2023-07-01 09:17:18'),
('a03018ac-f91e-4095-b247-0bccc600fa75', 'GS0001111', 'T.T.Duy', 'D23_TH04', 'HK3', '0', 'A', '50', '10', '30', '5', '3', '3', 'C703', '2023-08-10', '2024-02-10', '2023-07-04 09:00:04', '2023-07-04 09:00:04'),
('a15719b8-9fd7-41f8-bd83-4fff5f0d0111', 'GS19002', 'N.H.Thuc', 'D23_TH03', 'HK2', '0', 'Tiếng Anh 2', '40', '10', '30', '3, 7', '1', '3', 'C803', '2023-08-10', '2024-02-10', '2023-07-04 08:20:05', '2023-07-04 08:20:05'),
('a2a4dd76-c145-4f06-8271-775a2cbc0ab4', 'GS43001', 'N.H.Thuc', 'D23_TH04', 'HK1', '0', 'Vậy lý 1', '70', '0', '40', '5, 7', '3', '3', 'C703', '2023-08-10', '2024-02-10', '2023-07-01 09:18:33', '2023-07-01 09:18:33'),
('b2189679-b905-4cfe-bc2c-49df3a76fb20', 'GS0001111', 'T.T.Duy', 'D23_TH03', 'HK3', '0', 'A', '50', '10', '30', '5', '3', '3', 'C703', '2023-08-10', '2024-02-10', '2023-07-04 09:00:04', '2023-07-04 09:00:04'),
('c46aa127-b054-49c0-8078-a7ce96049467', 'GS59001', 'T.D.Khoa', 'D23_TH04', 'HK1', '0', 'Tin học đại cương', '70', '0', '40', '2, 6', '10', '3', 'C803', '2023-08-10', '2024-02-10', '2023-07-01 09:20:01', '2023-07-01 09:20:01'),
('cd832011-f8ce-41af-9a1f-4c0d173fdd3a', 'GS33001', 'N.H.Thuc', 'D23_TH03', 'HK1', '5', 'Toán A1 (Hàm 1 biến, chuỗi)', '70', '10', '30', '2, 4, 6', '2', '5', 'C805', '2023-08-10', '2024-02-10', '2023-07-01 09:20:29', '2023-07-01 09:20:29'),
('d23a2ac7-4f1f-4782-97c3-0df67c302a0c', 'GS33001', 'N.H.Thuc', 'D23_TH04', 'HK1', '5', 'Toán A1 (Hàm 1 biến, chuỗi)', '70', '10', '30', '2, 4, 6', '2', '5', 'C805', '2023-08-10', '2024-02-10', '2023-07-01 09:20:29', '2023-07-01 09:20:29'),
('f39dfb5f-f67d-4f7c-bc23-d2a4b77a4faf', 'GS59001', 'T.D.Khoa', 'D23_TH03', 'HK1', '0', 'Tin học đại cương', '70', '0', '40', '2, 6', '10', '3', 'C803', '2023-08-10', '2024-02-10', '2023-07-01 09:20:01', '2023-07-01 09:20:01'),
('f3c5f8aa-5283-41ac-8713-eac22ee6d4db', 'GS19001', 'T.T.Duy', 'D23_TH03', 'HK1', '0', 'Tiếng Anh 1', '40', '10', '30', '2, 4', '1', '3', 'C303', '2023-08-10', '2024-02-10', '2023-07-01 09:17:18', '2023-07-01 09:17:18'),
('fc0912ba-d80f-4750-b71a-5d1ab8e533e6', 'GS49004', 'T.D.Khoa', 'D23_TH03', 'HK1', '0', 'Thí nghiệm Vật lý_Phần 1', '40', '10', '20', '2, 6', '7', '3', 'D113', '2023-08-10', '2024-02-10', '2023-07-01 09:19:21', '2023-07-01 09:19:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PhieuDKMHs`
--

CREATE TABLE `PhieuDKMHs` (
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
-- Đang đổ dữ liệu cho bảng `PhieuDKMHs`
--

INSERT INTO `PhieuDKMHs` (`id`, `msmh`, `tenmh`, `mslophoc`, `siso`, `phanTramQT`, `phanTramGK`, `thu`, `tietbd`, `sotiet`, `phong`, `tengiangvien`, `ngaybd`, `ngaykt`, `mssv`, `hocphi`, `createdAt`, `updatedAt`) VALUES
('602f74a9-081c-4e9c-87e7-43ca5cc90c10', 'GS19001', 'Tiếng Anh 1', 'D23_TH03', '40', '10', '30', '2, 4', '1', '3', 'C303', 'T.T.Duy', '2023-08-10', '2024-02-10', 'DH52300321', '1232000', '2023-07-02 08:29:37', '2023-07-02 08:29:37'),
('9dc43191-461a-4e52-9a13-3742442ac287', 'GS33001', 'Toán A1 (Hàm 1 biến, chuỗi)', 'D23_TH03', '70', '10', '30', '2, 4, 6', '2', '5', 'C805', 'N.H.Thuc', '2023-08-10', '2024-02-10', 'DH52300321', '2464000', '2023-07-02 08:29:37', '2023-07-02 08:29:37'),
('6ee73392-aa19-428f-aa8b-d4b7feb7902d', 'GS43001', 'Vậy lý 1', 'D23_TH03', '70', '0', '40', '5, 7', '3', '3', 'C703', 'N.H.Thuc', '2023-08-10', '2024-02-10', 'DH52300321', '1848000', '2023-07-02 08:29:37', '2023-07-02 08:29:37'),
('fb1ad295-7e89-49b9-b25f-75e342fe0f0b', 'GS49004', 'Thí nghiệm Vật lý_Phần 1', 'D23_TH03', '40', '10', '20', '2, 6', '7', '3', 'D113', 'T.D.Khoa', '2023-08-10', '2024-02-10', 'DH52300321', '616000', '2023-07-02 08:29:37', '2023-07-02 08:29:37'),
('cfb05431-b6aa-4471-9039-cd142a86025d', 'GS59001', 'Tin học đại cương', 'D23_TH03', '70', '0', '40', '2, 6', '10', '3', 'C803', 'T.D.Khoa', '2023-08-10', '2024-02-10', 'DH52300321', '1232000', '2023-07-02 08:29:37', '2023-07-02 08:29:37');

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
('1', 'QNHT', 'Ngô Hồng Thức', 'ngohongthuc0506@gmail.com', '0855090339', '123123', 'Cà Mau', '2023-06-23 08:01:30', '2023-06-23 08:01:30');

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
-- Cấu trúc bảng cho bảng `Sinhviens`
--

CREATE TABLE `Sinhviens` (
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
-- Đang đổ dữ liệu cho bảng `Sinhviens`
--

INSERT INTO `Sinhviens` (`id`, `mssv`, `mslop`, `tensv`, `email`, `sodienthoai`, `matkhau`, `diachi`, `noisinh`, `ngaysinh`, `gioitinh`, `avatar`, `createdAt`, `updatedAt`) VALUES
('a32a4689-c180-4ab5-9e3b-700bac5719b5', 'DH51700924', 'D23_TH03', 'ABC', 'ạkshdasjk', '123123', '123123', 'jakdhasjd', 'sdhjsdh', '1999-06-05', 'Nam', 'khoa.jpg', '2023-06-30 02:47:04', '2023-06-30 02:47:04'),
('97969013-4eaf-49c0-b523-618632340087', 'DH52300123', 'D23_TH03', 'Ngô Hồng Thức', 'ngohongthuc0506@gmail.com', '0123456789', '123123', 'HCM', 'Kiên Giang', '2005-06-05', 'Nam', '275242715_3121030134803405_7186135125750822733_n.jpg', '2023-06-25 07:04:33', '2023-07-04 08:03:57'),
('c8e0f377-9b08-423e-a9ba-0e98670128fa', 'DH52300321', 'D23_TH03', 'asdjas', 'sakjdhsajk', '129312', '123123', 'jkchakdjh', 'sdhfsdjkf', '2005-10-10', 'Nam', 'khoa.jpg', '2023-06-26 02:22:09', '2023-06-26 02:22:09'),
('fd1580ac-adc7-4f51-99a4-66391814c176', 'DH52301234', 'D23_TH03', 'adhjaskhd', 'asjkdaskjdh', '1289312839', '123123', 'sdjhaskjda', 'sdjhkfdskj', '2005-10-10', 'Nữ', 'hay.jpg', '2023-06-26 07:06:51', '2023-06-26 07:06:51');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `Diems`
--
ALTER TABLE `Diems`
  ADD PRIMARY KEY (`mssv`,`msmh`);

--
-- Chỉ mục cho bảng `Giangviens`
--
ALTER TABLE `Giangviens`
  ADD PRIMARY KEY (`msgiangvien`);

--
-- Chỉ mục cho bảng `Hockies`
--
ALTER TABLE `Hockies`
  ADD PRIMARY KEY (`mshocky`);

--
-- Chỉ mục cho bảng `Hocphis`
--
ALTER TABLE `Hocphis`
  ADD PRIMARY KEY (`mssv`,`msmh`);

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
  ADD PRIMARY KEY (`id`,`msmh`,`mskhoa`);

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
  ADD PRIMARY KEY (`mssv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
