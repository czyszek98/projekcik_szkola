-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2017 at 02:26 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `user_id` int(11) NOT NULL,
  `name` text COLLATE utf8_polish_ci NOT NULL,
  `laset_name` text COLLATE utf8_polish_ci NOT NULL,
  `class` text COLLATE utf8_polish_ci NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`user_id`, `name`, `laset_name`, `class`, `active`) VALUES
(1, 'Andrzej', 'Lewandowski', '4TB', 1),
(2, 'Stefan', 'Jastrzembski', '2TE', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` text COLLATE utf8_polish_ci NOT NULL,
  `password` text COLLATE utf8_polish_ci NOT NULL,
  `email` text COLLATE utf8_polish_ci NOT NULL,
  `account_type` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `email`, `account_type`) VALUES
(1, 'andre', 'andrzej99', 'andrzejek@gmail.com', 'S'),
(2, 'stefan98', 'stefan98', 'stefan98@gmail.com', 'S'),
(3, 'andrea', 'haselko', 'email@email.ciom', 's'),
(4, 'andreas', 'haselko', 'emfail@email.ciom', 'T'),
(5, 'anddreas', 'haselko', 'emdfail@email.ciom', 'T'),
(6, 'anddrehas', 'haselko', 'emdfahil@email.ciom', 'T'),
(7, 'anddrehasd', 'dsaqdsad', 'emdfahil@emsail.ciom', 'T'),
(8, 'asdasdasd', 'asdasda', 'asdasd@asd.dsa', 'T'),
(9, 'andre', 'asdasd', 'asdasd@asd.dsa', 'T'),
(10, 'andre', 'asdasd', 'asdasd@asd.dsa', 'T'),
(11, 'andreo', 'asdasd', 'asd@asd.asd', 'T');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
