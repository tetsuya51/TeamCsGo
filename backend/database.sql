CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE `equipe` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    team_name VARCHAR(255) NOT NULL,
    description TEXT,
    logo VARCHAR(255)
);

CREATE TABLE `joueur` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    firstname VARCHAR(80) NOT NULL,
    lastname VARCHAR(80) NOT NULL,
    pseudo VARCHAR(40),
    biographie TEXT,
    photo VARCHAR(255),
    nationalite VARCHAR(255),
    equipe_id INT,
    FOREIGN KEY (equipe_id) REFERENCES equipe(id)
);

INSERT INTO equipe (team_name, description , logo) VALUES ('Vitality', 'Créée en 2018, notre équipe CS:GO a gravi la hiérarchie du jeu jusqu’à devenir numéro 1 mondial fin 2020. Forte de ses victoires contre les plus belles équipes du monde lors des plus grands rendez-vous, cette équipe française s’est hissée en haut en très peu de temps. Ses victoires coup sur coup à l’IEM Bejing 2020 & à Blast Premier Fall 2020 ont confirmées son statut d’équipe légendaires dans l’histoire du jeu.', 'https://esportbet.com/wp-content/uploads/2022/04/Team-Vitality.jpg'),('Faze', 'FaZe Clan est une équipe américaine de sport électronique créée le 30 mai 2010 et basée à Los Angeles. FaZe Clan acquiert son équipe Counter-Strike: Global Offensive en janvier 2016, en rachetant pour une somme de 700 000 $ les joueurs de G2 Esports. Il s agit à l époque de l acquisition la plus chère de l histoire du jeu2.', 'https://logos-world.net/wp-content/uploads/2021/01/FaZe-Clan-Logo.png'),('Free Agent', 'Joueur Bench ou free', 'https://titles.trackercdn.com/modern-warfare/db/images/ui_emblem_t9174_pc.png?10697530');

INSERT INTO joueur (firstname, lastname, pseudo ,biographie , photo ,nationalite , equipe_id) VALUES ('Mathieu' ,'Herbaut' ,'ZywOo' ,'Ce joueur emblématique de CS.GO est né à Lens où il passe la majeure partie de son adolescence. Aujourd’hui âgé de 20 ans, il rejoint Paris pour poursuivre sa carrière au sein de la team Vitality.
L’esprit d’équipe de Mathieu est sans conteste ce qui le définit le mieux. C’est une personne humaine et soucieuse des autres. Dans le jeu, il est très calme et posé. Sniper hors pair, il fait de cette particularité sa plus grande force. Et malgré son jeune âge, son palmarès a de quoi donner le tournis : iem beijing, blast fall série, épicenter, élu meilleur joueur du monde 2020 et 2021.' ,'https://vitality.gg/wp-content/uploads/2022/01/zywoo_csgo-1-640x640.jpg?x66378' ,'FR' , 1 ),('Dan', 'Madesclaire', 'Apex', 'Originaire de l’Est de la France et âgé de 28 ans, Dan est un joueur expérimenté qui est actuellement le leader incontesté de son équipe. Ce statut est le fruit d’un travail acharné et d’une détermination sans faille. Au-delà de cet aspect conventionnel, « apEX » est connu dans la compétition comme un joueur « fou et très agressif ». Ce paradoxe est sans conteste sa plus grande force.
Le challenge et l’envie de gagner font de lui un compétiteur hors pair pour lequel tous les titres remportés sont spéciaux et racontent une histoire particulière. Au niveau de son palmarès, nous retiendrons notamment le major de 2015.', 'https://vitality.gg/wp-content/uploads/2022/01/apex_csgo-1-640x640.jpg?x66378', 'FR', 1),('Emil', 'Reif', 'Magisk', 'Connu comme l’un des meilleurs fix dans CSGO, magisk est souvent au bon endroit au bon moment.

Son palmarès est impressionnant :
– 3 Major Win (MVP au Major, IEM Katowice 2019)
– 1ère équipe de l’histoire à remporter le Grandslam INTEL.
– Elu 14ème meilleur joueur en 2016, 7ème en 2018, 5ème en 2019 et 11ème meilleur joueur en 2020.

D’un tempérament blagueur, il est toujours le premier à plaisanter avec le reste de l’équipe.

magisk est toujours désireux de gagner, et fait preuve de passion et amour pour le jeu. Sa loyauté le précède et il participe à la stabilité de son équipe.', 'https://vitality.gg/wp-content/uploads/2022/01/magisk_csgo-1-640x640.jpg?x66378', 'DK', 1),('Lotan', 'Giladi', 'Spinx', 'Joueur Israelien nouveau chez les pro que peu d informations', 'https://vitality.gg/wp-content/uploads/2022/01/spinx_csgo-1-640x640.jpg?x66378', 'IL', 1),('Shahar', 'Shushan', 'flameZ', 'Joueur Israelien nouveau chez les pro que peu d informations', 'IL', 1),('Håvard', 'Nygaard', 'Rain', 'bio', 'https://img-cdn.hltv.org/playerbodyshot/BcLwaUMx36y5OQHAVnLmhR.png?ixlib=java-2.1.0&w=400&s=93fd97d57d89f0c530b299405da9aaa5', 'NW', 2),('Helvijs', 'Saukants', 'Broky', 'Bio', 'https://img-cdn.hltv.org/playerbodyshot/uz_gYKYS-cjdlEJ-tpikrV.png?ixlib=java-2.1.0&w=400&s=61eea26e2076802840dacc42bf8fd4ea', 'La', 2),('Russel', 'Van Dulken', 'Twistzz', 'bio', 'https://img-cdn.hltv.org/playerbodyshot/MtlmsJNL2i-7kMiNcG5I8t.png?ixlib=java-2.1.0&w=400&s=a9c0718e152a595d660a763f5057a339', 'Ca', 2),('Finn', 'Andersen', 'Karrigan', 'bio', 'https://img-cdn.hltv.org/playerbodyshot/HBq_UoWU_p_yC7jkxXD3Lp.png?ixlib=java-2.1.0&w=400&s=68522238b911e44997cad4e63d67398e', 'Da', 2),('Robin', 'Kool', 'Ropz', 'L un des meuilleur joueur au monde un talent or du commun , plus jeune joueur séléctionné chez les pro', 'https://img-cdn.hltv.org/playerbodyshot/OYZih3h-_cJrZDFq5ButZP.png?ixlib=java-2.1.0&w=400&s=3edd66ad46b03465cc98d235a46297cf', 'Estonoia', 2);