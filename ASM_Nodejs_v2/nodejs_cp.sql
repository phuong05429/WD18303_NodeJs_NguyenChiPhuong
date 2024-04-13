-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 13, 2024 at 02:59 PM
-- Server version: 8.0.31
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_cp`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(225) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Truyện', '2024-03-21 14:46:08', '2024-03-21 14:46:08'),
(2, 'Sách', '2024-03-21 14:47:00', '2024-03-21 14:47:00'),
(3, 'Sách Giáo Khoa', '2024-03-21 14:47:00', '2024-03-21 14:47:00'),
(4, 'Tập Viết', '2024-03-21 14:50:18', '2024-03-21 14:50:18');

-- --------------------------------------------------------

--
-- Table structure for table `hop_dong`
--

CREATE TABLE `hop_dong` (
  `id` int NOT NULL,
  `ten_nguoi_mua` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ten_nguoi_ban` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `gia_tien` decimal(10,2) NOT NULL,
  `ngay_ky` date NOT NULL,
  `trang_thai` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hop_dong`
--

INSERT INTO `hop_dong` (`id`, `ten_nguoi_mua`, `ten_nguoi_ban`, `gia_tien`, `ngay_ky`, `trang_thai`) VALUES
(1, 'khiem ngu', 'phuog dep trai', 1000.00, '2024-04-08', 2),
(3, 'Phuong', 'Phuong02', 3000.00, '2024-04-08', 2),
(4, 'Phuong', 'Phuong02', 3000.00, '2024-04-08', 2),
(5, 'Phuong23', 'Phuong0223', 3000.00, '2024-04-08', 3),
(6, 'Phuong23', 'Phuong0223', 3000.00, '2024-04-08', 3),
(16, 'Phuong12', 'Phuong22', 3000.00, '2024-04-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `total` int NOT NULL,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `user_id` int NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `order_id` int NOT NULL,
  `qty` int NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `create_at`, `update_at`) VALUES
(1, 'top 5 sach hay nhat TG', '1. sach abc\r\n2. sach xyz\r\n3. sach 123', '2024-04-03 13:58:59', '2024-04-03 13:59:55');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale_price` int NOT NULL,
  `describe` text NOT NULL,
  `image` varchar(2550) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `category_id` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `sale_price`, `describe`, `image`, `category_id`, `createdAt`, `updatedAt`) VALUES
(6, 'Sách tâm lý', 35000, 20000, 'Sách Sống Chậm', 'https://www.elle.vn/wp-content/uploads/2021/07/15/442832/1-sach-hay-song-cham.jpg', 2, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(7, 'sach luat', 50000, 49000, 'Giáo trình Luật Kinh Doanh', 'https://salt.tikicdn.com/ts/product/cf/a5/12/c53be0749f343eafb311d44f9ebbdf96.jpg', 2, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(8, 'truyen tranh ', 8000, 7000, 'Truyện tranh Doraemon', 'https://img.websosanh.vn/v10/users/review/images/aeq4glcfiy24v/bo-truyen-tranh-doremon.jpg?compress=85', 1, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(9, 'truyen co tich', 35000, 30000, 'Truyện cổ tích Việt Nam', 'https://www.netabooks.vn/Data/Sites/1/Product/28530/truyen-co-tich-viet-nam-hay-nhat-tap-1-1.jpg', 1, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(10, 'sach giao khoa tieu hoc', 20000, 18000, 'Sách giáo khoa Toán lớp 1 - xuất bản năm 2013', 'https://down-vn.img.susercontent.com/file/8a7e0d18efc6a9ef8a8833db9b1bc262', 3, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(11, 'sach giao khoa trung hoc co so', 4000, 3000, 'Sách giáo khoa Ngữ Van 6 - xuất bản năm 2013', 'https://sachhoc.com/image/cache/catalog/LuyenThi/Lop6-9/Sach-giao-khoa-ngu-van-6-tap-1-500x554.jpg', 3, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(12, 'truyen tieu lam', 4000, 3000, 'Truyện cười Việt Nam thời @ - xuất bản năm 2014', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_222793.jpg', 1, '2024-04-06 14:53:58', '2024-04-06 14:53:58'),
(13, 'truyen tieu lam', 4000, 3000, 'Truyện Trạng cười Việt Nam - xuất bản năm 2010', 'https://salt.tikicdn.com/cache/280x280/media/catalog/product/t/r/trang-cuoi.jpg', 1, '2024-04-06 14:53:58', '2024-04-06 14:53:58');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Phuong', 'ChiPhuong@gmail.com', ''),
(2, 'phuong', 'phuongncpc05429@gmail.com', 'phuog123'),
(3, 'phuong12', 'phuongncpc05429@gmail.com', 'phuog12335');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hop_dong`
--
ALTER TABLE `hop_dong`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3` (`user_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_1` (`product_id`),
  ADD KEY `FK_2` (`order_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relation` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `hop_dong`
--
ALTER TABLE `hop_dong`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
