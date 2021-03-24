-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2021 at 10:24 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hikeczech`
--

-- --------------------------------------------------------

--
-- Table structure for table `entities`
--

CREATE TABLE `entities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coordinates` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `entities`
--

INSERT INTO `entities` (`id`, `token`, `name`, `region`, `photo`, `description`, `coordinates`, `created_at`, `updated_at`) VALUES
(1, NULL, 'name1', 'region1', 'https://picsum.photos/id/10/1200/900', '\r\n	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi rerum quia vel, asperiores, quidem quos odit sunt doloribus, obcaecati animi? Nesciunt ex voluptate magni id nemo rem deserunt doloremque!', '[{\"lng\":14.192752093076706,\"lat\":49.860888943076134},{\"lng\":14.193696230649948,\"lat\":49.860489293932915},{\"lng\":14.176834523677826,\"lat\":49.85219590365887},{\"lng\":14.167079329490662,\"lat\":49.8463399708271},{\"lng\":14.154519885778427,\"lat\":49.84061613678932},{\"lng\":14.14878934621811,\"lat\":49.837174862623215},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.150477796792984,\"lat\":49.826826229691505},{\"lng\":14.201547056436539,\"lat\":49.8251860588789},{\"lng\":14.202176034450531,\"lat\":49.82314020395279},{\"lng\":14.200820177793503,\"lat\":49.820810705423355},{\"lng\":14.19313833117485,\"lat\":49.8140287399292},{\"lng\":14.191512912511826,\"lat\":49.81201171875},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.194279611110687,\"lat\":49.8105800896883},{\"lng\":14.191423058509827,\"lat\":49.804057627916336},{\"lng\":14.18224185705185,\"lat\":49.79580111801624},{\"lng\":14.181811362504959,\"lat\":49.79564420878887},{\"lng\":14.177004843950272,\"lat\":49.803118854761124},{\"lng\":14.170150458812714,\"lat\":49.80159401893616},{\"lng\":14.161806106567383,\"lat\":49.79892052710056},{\"lng\":14.148906022310257,\"lat\":49.812261164188385},{\"lng\":14.148357510566711,\"lat\":49.80804070830345},{\"lng\":14.145024865865707,\"lat\":49.809240996837616},{\"lng\":14.144369065761566,\"lat\":49.809774085879326},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.141045808792114,\"lat\":49.801274836063385},{\"lng\":14.124480485916138,\"lat\":49.80412736535072},{\"lng\":14.123088419437408,\"lat\":49.80187229812145},{\"lng\":14.11753624677658,\"lat\":49.79536056518555},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.096893966197968,\"lat\":49.79429371654987},{\"lng\":14.090255498886108,\"lat\":49.78698067367077},{\"lng\":14.088439643383026,\"lat\":49.78798381984234},{\"lng\":14.086527228355408,\"lat\":49.792953953146935},{\"lng\":14.079573601484299,\"lat\":49.79351654648781},{\"lng\":14.079619199037552,\"lat\":49.790477603673935},{\"lng\":14.055076986551285,\"lat\":49.776852652430534},{\"lng\":14.055113196372986,\"lat\":49.77688752114773},{\"lng\":14.192758798599243,\"lat\":49.8609010130167},{\"lng\":14.136110544204712,\"lat\":49.83555346727371},{\"lng\":14.193204045295715,\"lat\":49.81131836771965},{\"lng\":14.135217368602753,\"lat\":49.804929345846176},{\"lng\":14.104661643505096,\"lat\":49.79462496936321},{\"lng\":14.05487984418869,\"lat\":49.77700285613537},{\"lng\":[14.192752093076706,49.860888943076134,566],\"lat\":[14.193696230649948,49.860489293932915,569]}]', '2021-03-19 12:22:17', '2021-03-19 12:22:17'),
(2, NULL, 'name2', 'region2', 'https://picsum.photos/id/11/1200/900', '\r\n	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi rerum quia vel, asperiores, quidem quos odit sunt doloribus, obcaecati animi? Nesciunt ex voluptate magni id nemo rem deserunt doloremque!', '[{\"lng\":14.192752093076706,\"lat\":49.860888943076134},{\"lng\":14.193696230649948,\"lat\":49.860489293932915},{\"lng\":14.176834523677826,\"lat\":49.85219590365887},{\"lng\":14.167079329490662,\"lat\":49.8463399708271},{\"lng\":14.154519885778427,\"lat\":49.84061613678932},{\"lng\":14.14878934621811,\"lat\":49.837174862623215},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.150477796792984,\"lat\":49.826826229691505},{\"lng\":14.201547056436539,\"lat\":49.8251860588789},{\"lng\":14.202176034450531,\"lat\":49.82314020395279},{\"lng\":14.200820177793503,\"lat\":49.820810705423355},{\"lng\":14.19313833117485,\"lat\":49.8140287399292},{\"lng\":14.191512912511826,\"lat\":49.81201171875},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.194279611110687,\"lat\":49.8105800896883},{\"lng\":14.191423058509827,\"lat\":49.804057627916336},{\"lng\":14.18224185705185,\"lat\":49.79580111801624},{\"lng\":14.181811362504959,\"lat\":49.79564420878887},{\"lng\":14.177004843950272,\"lat\":49.803118854761124},{\"lng\":14.170150458812714,\"lat\":49.80159401893616},{\"lng\":14.161806106567383,\"lat\":49.79892052710056},{\"lng\":14.148906022310257,\"lat\":49.812261164188385},{\"lng\":14.148357510566711,\"lat\":49.80804070830345},{\"lng\":14.145024865865707,\"lat\":49.809240996837616},{\"lng\":14.144369065761566,\"lat\":49.809774085879326},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.141045808792114,\"lat\":49.801274836063385},{\"lng\":14.124480485916138,\"lat\":49.80412736535072},{\"lng\":14.123088419437408,\"lat\":49.80187229812145},{\"lng\":14.11753624677658,\"lat\":49.79536056518555},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.096893966197968,\"lat\":49.79429371654987},{\"lng\":14.090255498886108,\"lat\":49.78698067367077},{\"lng\":14.088439643383026,\"lat\":49.78798381984234},{\"lng\":14.086527228355408,\"lat\":49.792953953146935},{\"lng\":14.079573601484299,\"lat\":49.79351654648781},{\"lng\":14.079619199037552,\"lat\":49.790477603673935},{\"lng\":14.055076986551285,\"lat\":49.776852652430534},{\"lng\":14.055113196372986,\"lat\":49.77688752114773},{\"lng\":14.192758798599243,\"lat\":49.8609010130167},{\"lng\":14.136110544204712,\"lat\":49.83555346727371},{\"lng\":14.193204045295715,\"lat\":49.81131836771965},{\"lng\":14.135217368602753,\"lat\":49.804929345846176},{\"lng\":14.104661643505096,\"lat\":49.79462496936321},{\"lng\":14.05487984418869,\"lat\":49.77700285613537},{\"lng\":[14.192752093076706,49.860888943076134,566],\"lat\":[14.193696230649948,49.860489293932915,569]}]', '2021-03-19 12:23:34', '2021-03-19 12:23:34'),
(11, NULL, 'name3', 'region3', 'https://picsum.photos/id/12/1200/900', '\r\n	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi rerum quia vel, asperiores, quidem quos odit sunt doloribus, obcaecati animi? Nesciunt ex voluptate magni id nemo rem deserunt doloremque!', '[{\"lng\":14.192752093076706,\"lat\":49.860888943076134},{\"lng\":14.193696230649948,\"lat\":49.860489293932915},{\"lng\":14.176834523677826,\"lat\":49.85219590365887},{\"lng\":14.167079329490662,\"lat\":49.8463399708271},{\"lng\":14.154519885778427,\"lat\":49.84061613678932},{\"lng\":14.14878934621811,\"lat\":49.837174862623215},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.150477796792984,\"lat\":49.826826229691505},{\"lng\":14.201547056436539,\"lat\":49.8251860588789},{\"lng\":14.202176034450531,\"lat\":49.82314020395279},{\"lng\":14.200820177793503,\"lat\":49.820810705423355},{\"lng\":14.19313833117485,\"lat\":49.8140287399292},{\"lng\":14.191512912511826,\"lat\":49.81201171875},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.194279611110687,\"lat\":49.8105800896883},{\"lng\":14.191423058509827,\"lat\":49.804057627916336},{\"lng\":14.18224185705185,\"lat\":49.79580111801624},{\"lng\":14.181811362504959,\"lat\":49.79564420878887},{\"lng\":14.177004843950272,\"lat\":49.803118854761124},{\"lng\":14.170150458812714,\"lat\":49.80159401893616},{\"lng\":14.161806106567383,\"lat\":49.79892052710056},{\"lng\":14.148906022310257,\"lat\":49.812261164188385},{\"lng\":14.148357510566711,\"lat\":49.80804070830345},{\"lng\":14.145024865865707,\"lat\":49.809240996837616},{\"lng\":14.144369065761566,\"lat\":49.809774085879326},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.141045808792114,\"lat\":49.801274836063385},{\"lng\":14.124480485916138,\"lat\":49.80412736535072},{\"lng\":14.123088419437408,\"lat\":49.80187229812145},{\"lng\":14.11753624677658,\"lat\":49.79536056518555},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.096893966197968,\"lat\":49.79429371654987},{\"lng\":14.090255498886108,\"lat\":49.78698067367077},{\"lng\":14.088439643383026,\"lat\":49.78798381984234},{\"lng\":14.086527228355408,\"lat\":49.792953953146935},{\"lng\":14.079573601484299,\"lat\":49.79351654648781},{\"lng\":14.079619199037552,\"lat\":49.790477603673935},{\"lng\":14.055076986551285,\"lat\":49.776852652430534},{\"lng\":14.055113196372986,\"lat\":49.77688752114773},{\"lng\":14.192758798599243,\"lat\":49.8609010130167},{\"lng\":14.136110544204712,\"lat\":49.83555346727371},{\"lng\":14.193204045295715,\"lat\":49.81131836771965},{\"lng\":14.135217368602753,\"lat\":49.804929345846176},{\"lng\":14.104661643505096,\"lat\":49.79462496936321},{\"lng\":14.05487984418869,\"lat\":49.77700285613537},{\"lng\":[14.192752093076706,49.860888943076134,566],\"lat\":[14.193696230649948,49.860489293932915,569]}]', '2021-03-19 12:25:59', '2021-03-19 12:25:59'),
(12, NULL, 'name4', 'region4', 'https://picsum.photos/id/13/1200/900', '\r\n	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi rerum quia vel, asperiores, quidem quos odit sunt doloribus, obcaecati animi? Nesciunt ex voluptate magni id nemo rem deserunt doloremque!', '[{\"lng\":14.192752093076706,\"lat\":49.860888943076134},{\"lng\":14.193696230649948,\"lat\":49.860489293932915},{\"lng\":14.176834523677826,\"lat\":49.85219590365887},{\"lng\":14.167079329490662,\"lat\":49.8463399708271},{\"lng\":14.154519885778427,\"lat\":49.84061613678932},{\"lng\":14.14878934621811,\"lat\":49.837174862623215},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.150477796792984,\"lat\":49.826826229691505},{\"lng\":14.201547056436539,\"lat\":49.8251860588789},{\"lng\":14.202176034450531,\"lat\":49.82314020395279},{\"lng\":14.200820177793503,\"lat\":49.820810705423355},{\"lng\":14.19313833117485,\"lat\":49.8140287399292},{\"lng\":14.191512912511826,\"lat\":49.81201171875},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.194279611110687,\"lat\":49.8105800896883},{\"lng\":14.191423058509827,\"lat\":49.804057627916336},{\"lng\":14.18224185705185,\"lat\":49.79580111801624},{\"lng\":14.181811362504959,\"lat\":49.79564420878887},{\"lng\":14.177004843950272,\"lat\":49.803118854761124},{\"lng\":14.170150458812714,\"lat\":49.80159401893616},{\"lng\":14.161806106567383,\"lat\":49.79892052710056},{\"lng\":14.148906022310257,\"lat\":49.812261164188385},{\"lng\":14.148357510566711,\"lat\":49.80804070830345},{\"lng\":14.145024865865707,\"lat\":49.809240996837616},{\"lng\":14.144369065761566,\"lat\":49.809774085879326},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.141045808792114,\"lat\":49.801274836063385},{\"lng\":14.124480485916138,\"lat\":49.80412736535072},{\"lng\":14.123088419437408,\"lat\":49.80187229812145},{\"lng\":14.11753624677658,\"lat\":49.79536056518555},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.096893966197968,\"lat\":49.79429371654987},{\"lng\":14.090255498886108,\"lat\":49.78698067367077},{\"lng\":14.088439643383026,\"lat\":49.78798381984234},{\"lng\":14.086527228355408,\"lat\":49.792953953146935},{\"lng\":14.079573601484299,\"lat\":49.79351654648781},{\"lng\":14.079619199037552,\"lat\":49.790477603673935},{\"lng\":14.055076986551285,\"lat\":49.776852652430534},{\"lng\":14.055113196372986,\"lat\":49.77688752114773},{\"lng\":14.192758798599243,\"lat\":49.8609010130167},{\"lng\":14.136110544204712,\"lat\":49.83555346727371},{\"lng\":14.193204045295715,\"lat\":49.81131836771965},{\"lng\":14.135217368602753,\"lat\":49.804929345846176},{\"lng\":14.104661643505096,\"lat\":49.79462496936321},{\"lng\":14.05487984418869,\"lat\":49.77700285613537},{\"lng\":[14.192752093076706,49.860888943076134,566],\"lat\":[14.193696230649948,49.860489293932915,569]}]', '2021-03-19 14:25:01', '2021-03-19 14:25:01'),
(13, NULL, 'name5', 'region5', 'https://picsum.photos/id/14/1200/900', '\r\n	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi rerum quia vel, asperiores, quidem quos odit sunt doloribus, obcaecati animi? Nesciunt ex voluptate magni id nemo rem deserunt doloremque!', '[{\"lng\":14.192752093076706,\"lat\":49.860888943076134},{\"lng\":14.193696230649948,\"lat\":49.860489293932915},{\"lng\":14.176834523677826,\"lat\":49.85219590365887},{\"lng\":14.167079329490662,\"lat\":49.8463399708271},{\"lng\":14.154519885778427,\"lat\":49.84061613678932},{\"lng\":14.14878934621811,\"lat\":49.837174862623215},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135556668043137,\"lat\":49.835517928004265},{\"lng\":14.135548621416092,\"lat\":49.83526311814785},{\"lng\":14.150477796792984,\"lat\":49.826826229691505},{\"lng\":14.201547056436539,\"lat\":49.8251860588789},{\"lng\":14.202176034450531,\"lat\":49.82314020395279},{\"lng\":14.200820177793503,\"lat\":49.820810705423355},{\"lng\":14.19313833117485,\"lat\":49.8140287399292},{\"lng\":14.191512912511826,\"lat\":49.81201171875},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193363636732101,\"lat\":49.81132172048092},{\"lng\":14.193147718906403,\"lat\":49.81088116765022},{\"lng\":14.194279611110687,\"lat\":49.8105800896883},{\"lng\":14.191423058509827,\"lat\":49.804057627916336},{\"lng\":14.18224185705185,\"lat\":49.79580111801624},{\"lng\":14.181811362504959,\"lat\":49.79564420878887},{\"lng\":14.177004843950272,\"lat\":49.803118854761124},{\"lng\":14.170150458812714,\"lat\":49.80159401893616},{\"lng\":14.161806106567383,\"lat\":49.79892052710056},{\"lng\":14.148906022310257,\"lat\":49.812261164188385},{\"lng\":14.148357510566711,\"lat\":49.80804070830345},{\"lng\":14.145024865865707,\"lat\":49.809240996837616},{\"lng\":14.144369065761566,\"lat\":49.809774085879326},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.135036319494247,\"lat\":49.8049970716238},{\"lng\":14.141045808792114,\"lat\":49.801274836063385},{\"lng\":14.124480485916138,\"lat\":49.80412736535072},{\"lng\":14.123088419437408,\"lat\":49.80187229812145},{\"lng\":14.11753624677658,\"lat\":49.79536056518555},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.105023741722107,\"lat\":49.79450762271881},{\"lng\":14.10478100180626,\"lat\":49.79419447481632},{\"lng\":14.096893966197968,\"lat\":49.79429371654987},{\"lng\":14.090255498886108,\"lat\":49.78698067367077},{\"lng\":14.088439643383026,\"lat\":49.78798381984234},{\"lng\":14.086527228355408,\"lat\":49.792953953146935},{\"lng\":14.079573601484299,\"lat\":49.79351654648781},{\"lng\":14.079619199037552,\"lat\":49.790477603673935},{\"lng\":14.055076986551285,\"lat\":49.776852652430534},{\"lng\":14.055113196372986,\"lat\":49.77688752114773},{\"lng\":14.192758798599243,\"lat\":49.8609010130167},{\"lng\":14.136110544204712,\"lat\":49.83555346727371},{\"lng\":14.193204045295715,\"lat\":49.81131836771965},{\"lng\":14.135217368602753,\"lat\":49.804929345846176},{\"lng\":14.104661643505096,\"lat\":49.79462496936321},{\"lng\":14.05487984418869,\"lat\":49.77700285613537},{\"lng\":[14.192752093076706,49.860888943076134,566],\"lat\":[14.193696230649948,49.860489293932915,569]}]', '2021-03-19 14:28:35', '2021-03-19 14:28:35');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(6, '2014_10_12_000000_create_users_table', 1),
(7, '2014_10_12_100000_create_password_resets_table', 1),
(8, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(9, '2019_08_19_000000_create_failed_jobs_table', 1),
(10, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(11, '2021_03_18_202949_create_entities_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` blob DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `username`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `photo`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Martin', 'martin@test.com', NULL, '$2y$10$Sz6EbRuI5btK11RZSLR7e.YujXF6w/M3CirN1oHiy8i5dpzJ0kZ2S', NULL, NULL, NULL, NULL, '2021-03-18 20:44:49', '2021-03-18 20:44:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entities`
--
ALTER TABLE `entities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entities`
--
ALTER TABLE `entities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
