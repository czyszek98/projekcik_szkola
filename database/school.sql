-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 19 Kwi 2017, 04:54
-- Wersja serwera: 10.1.21-MariaDB
-- Wersja PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `school`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `apps`
--

CREATE TABLE `apps` (
  `subject_id` int(11) NOT NULL,
  `name` text COLLATE utf8_polish_ci NOT NULL,
  `background` text COLLATE utf8_polish_ci NOT NULL,
  `url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci ROW_FORMAT=COMPACT;

--
-- Zrzut danych tabeli `apps`
--

INSERT INTO `apps` (`subject_id`, `name`, `background`, `url`) VALUES
(1, 'asd', '#EDEDED', 'dsa'),
(1, 'dsass', '#EDEDED', 'dsass'),
(3, 'sss', '#EDEDED', 'sss'),
(3, 'sssd', '#EDEDED', 'dddd'),
(5, 'asd', '#EDEDED', 'asd'),
(5, 'Słówka', '#9ccc00', 'asd'),
(6, 'Slowka', '#9ccc00', 'http://localhost/projekcik_szkola/apk/english/words/ang_random.php'),
(6, 'asd', '#ceeeaa', 'https://lotari.pl/imageprocessor?m=normal&f=https://t2.ftcdn.net/jpg/00/86/55/17/1000_F_86551738_UAtKOWHQrGJn6778zj1NKREqdM5XE5RZ.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `user_id` int(11) NOT NULL,
  `name` text COLLATE utf8_polish_ci NOT NULL,
  `laset_name` text COLLATE utf8_polish_ci NOT NULL,
  `class` text COLLATE utf8_polish_ci NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `students`
--

INSERT INTO `students` (`user_id`, `name`, `laset_name`, `class`, `active`) VALUES
(1, 'Andrzej', 'Lewandowski', '4TB', 1),
(2, 'Stefan', 'Jastrzembski', '2TE', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_polish_ci NOT NULL,
  `background` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `background`) VALUES
(1, 'Matematyka', '#303030'),
(2, 'Polski', '#dedede'),
(3, 'Informatyka', '#dddddd'),
(4, 'Angielski', '#bbbbbb'),
(5, 'Fizyka', 'https://lotari.pl/imageprocessor?m=normal&f=https://t2.ftcdn.net/jpg/00/86/55/17/1000_F_86551738_UAtKOWHQrGJn6778zj1NKREqdM5XE5RZ.jpg'),
(6, 'J.angielski', 'http://www.malopolska.edu.pl/_pliki_/filemanager/image/studia/4_-jezyk_angielski_w_wychowaniu_przedszkolnym_i_edukacji_wczesnoszkolnej.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `theme`
--

CREATE TABLE `theme` (
  `id` int(11) NOT NULL,
  `themeName` text COLLATE utf8_polish_ci NOT NULL,
  `backgroundColor` text COLLATE utf8_polish_ci NOT NULL,
  `footerColor` text COLLATE utf8_polish_ci NOT NULL,
  `profileColor` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `theme`
--

INSERT INTO `theme` (`id`, `themeName`, `backgroundColor`, `footerColor`, `profileColor`) VALUES
(1, 'Dziwny Motyw', '#AAA', '#555', '#a50bbb'),
(2, 'Nie wiem', '#BBB', '#CCC', '#EEE'),
(3, 'Ladny motyw', '#f0e7df', '#001833', '#95a0a9'),
(4, 'Drewniana purpura', '#ccccccb3', '#5f606f', '#3E2828'),
(6, 'Lazurowe wybrzeze', '#c0a999a', '#c990bea', '#aab900'),
(13, 'kukurydza', '#24e7f7', '#f4f05b', '#5afe77');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` text COLLATE utf8_polish_ci NOT NULL,
  `password` text COLLATE utf8_polish_ci NOT NULL,
  `email` text COLLATE utf8_polish_ci NOT NULL,
  `account_type` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `email`, `account_type`) VALUES
(1, 'andre1', 'andrzej99', 'andrzejek@gmail.com', 'S'),
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

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `words`
--

CREATE TABLE `words` (
  `ang` text COLLATE utf8_polish_ci NOT NULL,
  `pol` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `words`
--

INSERT INTO `words` (`ang`, `pol`) VALUES
('less', 'mniej'),
('sheet of paper', 'kartka papieru'),
('similar', 'podobny'),
('hue', 'odcień'),
('label', 'etykieta'),
('surface', 'powierzchnia');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theme`
--
ALTER TABLE `theme`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT dla tabeli `theme`
--
ALTER TABLE `theme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
