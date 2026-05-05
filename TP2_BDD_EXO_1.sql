-- phpMyAdmin SQL Dump
-- version 5.2.1deb1+deb12u1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 05 mai 2026 à 09:07
-- Version du serveur : 10.11.14-MariaDB-0+deb12u2
-- Version de PHP : 8.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `TP2_BDD_EXO_1`
--

-- --------------------------------------------------------

--
-- Structure de la table `Joueur`
--

CREATE TABLE `Joueur` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Joueur`
--

INSERT INTO `Joueur` (`id`, `nom`, `prenom`) VALUES
(1, 'MORELLE', 'Geoffrey'),
(2, 'test', 'test'),
(3, 'salive', 'hard'),
(4, 'truc', 'truc'),
(5, '', ''),
(6, '', ''),
(7, 's<f', 'qsf'),
(8, '', ''),
(9, '', ''),
(10, '', ''),
(11, '', ''),
(12, '', ''),
(13, '', ''),
(14, '', ''),
(15, '', ''),
(16, '', ''),
(17, '', ''),
(18, '', ''),
(19, '', ''),
(20, '', ''),
(21, '', '');

-- --------------------------------------------------------

--
-- Structure de la table `Match Tennis`
--

CREATE TABLE `Match Tennis` (
  `id` int(11) NOT NULL,
  `date-heure` date NOT NULL,
  `id_Joueur` int(11) NOT NULL,
  `id_Terrain` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Terrain`
--

CREATE TABLE `Terrain` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Terrain`
--

INSERT INTO `Terrain` (`id`) VALUES
(1),
(2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Joueur`
--
ALTER TABLE `Joueur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Match Tennis`
--
ALTER TABLE `Match Tennis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Joueur` (`id_Joueur`),
  ADD KEY `id_Terrain` (`id_Terrain`);

--
-- Index pour la table `Terrain`
--
ALTER TABLE `Terrain`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Joueur`
--
ALTER TABLE `Joueur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `Match Tennis`
--
ALTER TABLE `Match Tennis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Terrain`
--
ALTER TABLE `Terrain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Match Tennis`
--
ALTER TABLE `Match Tennis`
  ADD CONSTRAINT `Match Tennis_ibfk_1` FOREIGN KEY (`id_Joueur`) REFERENCES `Joueur` (`id`),
  ADD CONSTRAINT `Match Tennis_ibfk_2` FOREIGN KEY (`id_Terrain`) REFERENCES `Terrain` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
