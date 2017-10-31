INSERT INTO `users` (`id`,`login`,`password`,`email`,`accountType`) VALUES (1,'uczen123','uczen123','uczen@u.pl','S');
INSERT INTO `users` (`id`,`login`,`password`,`email`,`accountType`) VALUES (2,'nauczyciel123','nauczyciel123','nauczyciel@n.pl','T');
INSERT INTO `users` (`id`,`login`,`password`,`email`,`accountType`) VALUES (3,'administrator123','administrator123','administrator@a.pl','A');
INSERT INTO `users` (`id`,`login`,`password`,`email`,`accountType`) VALUES (4,'rodzic123','rodzic123','rodzic@r.pl','P');

INSERT INTO `overlaps` (`id`,`name`,`accountType`,`default`) VALUES (1,'Nauka','C',0);
INSERT INTO `overlaps` (`id`,`name`,`accountType`,`default`) VALUES (2,'Profil','C',0);
INSERT INTO `overlaps` (`id`,`name`,`accountType`,`default`) VALUES (3,'Dziennik','T',1);
INSERT INTO `overlaps` (`id`,`name`,`accountType`,`default`) VALUES (4,'Postępy','S',1);
INSERT INTO `overlaps` (`id`,`name`,`accountType`,`default`) VALUES (5,'Panel administracyjny','A',1);

INSERT INTO `menuitems` (`id`,`overlapId`,`name`,`description`,`href`) VALUES (1,1,'Lekcje',NULL,'{\"action\":\"alllessons\"}');
INSERT INTO `menuitems` (`id`,`overlapId`,`name`,`description`,`href`) VALUES (2,1,'Zadania',NULL,NULL);
INSERT INTO `menuitems` (`id`,`overlapId`,`name`,`description`,`href`) VALUES (3,1,'Aplikacje',NULL,'{\"action\":\"subjectapp\"}');
INSERT INTO `menuitems` (`id`,`overlapId`,`name`,`description`,`href`) VALUES (4,2,'Mój profil',NULL,'{\"action\":\"profile\"}');
INSERT INTO `menuitems` (`id`,`overlapId`,`name`,`description`,`href`) VALUES (5,2,'Motywy',NULL,'{\"action\":\"theme\"}');
INSERT INTO `menuitems` (`id`,`overlapId`,`name`,`description`,`href`) VALUES (6,2,'Ustawienia',NULL,NULL);
