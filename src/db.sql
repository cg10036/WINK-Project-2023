CREATE USER 'test'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test1234!@';
CREATE DATABASE `test`;
GRANT ALL PRIVILEGES ON `test`.* TO 'test'@'localhost';
FLUSH PRIVILEGES;