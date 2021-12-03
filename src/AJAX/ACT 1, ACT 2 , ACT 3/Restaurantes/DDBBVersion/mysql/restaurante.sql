-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-11-2021 a las 10:08:53
-- Versión del servidor: 8.0.27-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

drop database restaurante;
create database restaurante;
use restaurante;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carta`
--

CREATE TABLE `Carta` (
  `Id` int NOT NULL primary key,
  `Titol` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `RestaurantID` int NOT NULL,
  `Temporada` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Carta`
--

INSERT INTO `Carta` (`Id`, `Titol`, `RestaurantID`, `Temporada`) VALUES
(1, 'Hamburgesas', 1, 'Invierno'),
(2, 'Pizzas', 1, 'Verano'),
(3, 'Kebab', 2, 'Otoño'),
(4, 'Pastas', 3, 'Invierno'),
(5, 'Bebidas', 4, 'Invierno'),
(6, 'Tartas', 4, 'Verano'),
(7, 'Carnes', 5, 'Primavera'),
(8, 'Acompañantes', 6, 'Primavera'),
(9, 'Salsas', 6, 'Verano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Restaurante`
--

CREATE TABLE `Restaurante` (
  `Id` int NOT NULL primary key,
  `Nom` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Poblacio` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Tipo` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `CategoriaPrecio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Restaurante`
--

INSERT INTO `Restaurante` (`Id`, `Nom`, `Poblacio`, `Tipo`, `CategoriaPrecio`) VALUES
(1, 'Restaurante Pablo', 'Islas Baleares', 'Mexicano', 2),
(2, 'PeperonisRioto', 'Valencia', 'Italiano', 1),
(3, 'Can Juan', 'Madrid', 'Carne', 3),
(4, 'Manolos', 'Barcelona', 'Pescado', 3),
(5, 'TirasRest', 'Islas Baleares', 'Carne', 1),
(6, '私は最高だ', 'Islas Baleares', 'Japones', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
