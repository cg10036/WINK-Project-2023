CREATE USER 'test'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test';
CREATE DATABASE `test`;
GRANT ALL PRIVILEGES ON `test`.* TO 'test'@'localhost';
FLUSH PRIVILEGES;