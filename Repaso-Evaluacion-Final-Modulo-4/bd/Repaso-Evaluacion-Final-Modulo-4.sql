create database recetas_db; 

use recetas_db; 

CREATE TABLE `recetas_db`.`recetas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `ingredientes` VARCHAR(1024) NULL,
  `instrucciones` VARCHAR(1024) NULL,
  PRIMARY KEY (`id`));


INSERT INTO `recetas` (`nombre`, `ingredientes`, `instrucciones`) VALUES ('Gazpacho', 'tomate, pepino, pimiento, cebolla, ajo', 'El gazpacho es una sopa fría con ingredientes como aceite de oliva, vinagre y hortalizas crudas: generalmente tomate, pepino, pimiento, cebolla y ajo.\nSuele servirse fresco en los meses calurosos de verano. Su color varía desde el anaranjado pálido al rojo, según se empleen tomates más o menos maduros (que aportan un colorante natural denominado licopeno).​ El origen del actual gazpacho es incierto, aunque tradicionalmente se lo ha considerado un plato del interior de Andalucía, donde el aceite de oliva y los productos de la huerta son abundantes, y los veranos muy secos y calurosos.​ Por esta razón se lo conoce comúnmente como gazpacho andaluz. A pesar de ello el origen del gazpacho como plato \"desmigado\" es anterior al uso de hortalizas en su elaboración y data de la época del al-Ándalus.​');
INSERT INTO `recetas` (`nombre`, `ingredientes`, `instrucciones`) VALUES ('Gazpacho andaluz', 'tomate, pimiento, ajo, pan, pepino, cebolla', 'El gazpacho, denominado andaluz popularmente, suele ser definido por algunos autores culinarios como una mezcla entre sopa y ensalada. En la actualidad se emplea como un refresco en la mayoría de las ocasiones, y se sirve por regla general en verano. Suele servirse fresco como una bebida o comida de aromas agradables y reconfortantes. Si bien no está demostrado, hay autores que sospechan que su origen es Sevilla. Se denomina andaluz por haber trascendido así al resto de regiones de España y del mundo, pero en Andalucía se toman gazpachos blancos (un ejemplo es el gazpacho blanco cordobés) que no contienen tomate, y gazpachos rojos que sí los tienen. Los gazpachos rojos se elaboran en Andalucía occidental, los blancos en Málaga, Córdoba y Granada y los verdes en Sierra Morena y la Sierra de Huelva.');