create database FSDShop
;

use FSDShop
;

CREATE TABLE `user` (
  `uid` int AUTO_INCREMENT PRIMARY KEY,
  `uemail` varchar(100) unique,
  `pword` varchar(100) not null,
  `role` smallint not null,
  `fname` varchar(100),
  `lname` varchar(100),
  `add1` varchar(100),
  `add2` varchar(100),
  `phone1` varchar(100),
  `phone2` varchar(100),
  `recipient` varchar(100)
)
;

CREATE TABLE `category` (
  `cid` smallint AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(1000)
)
;

CREATE TABLE `seller` (
  `sid` int AUTO_INCREMENT PRIMARY KEY,
  `pid` varchar(100) unique,
  `sname` varchar(100) not null,
  `description` varchar(1000)
)
;

CREATE TABLE `product` (
  `pid` int AUTO_INCREMENT PRIMARY KEY,
  `cid` smallint not null,
  `sid` int not null,
  `pname` smallint not null,
  `price` float,
  `description` varchar(1000),
  `img` varchar(100),
  `rate` smallint
)
;

CREATE TABLE `order` (
  `oid` int AUTO_INCREMENT PRIMARY KEY,
  `uid` int not null,
  `status` smallint not null,
  `odate` date
)
;

CREATE TABLE `item` (
  `iid` int primary key AUTO_INCREMENT,
  `oid` int NOT NULL,
  `pid` int NOT NULL,
  `sid` int not null,
  `quantity` smallint not null,
  `pname` smallint not null,
  `price` float,
  `description` varchar(1000),
  `img` varchar(100)
)
;

CREATE TABLE `review` (
  `rid` int primary key AUTO_INCREMENT,
  `pid` int NOT NULL,
  `uid` int not null,
  `text` varchar(1000),
  `rdate` date
)
;

ALTER TABLE product
ADD CONSTRAINT FK_product_category
FOREIGN KEY product(cid) REFERENCES category(cid)
;

ALTER TABLE product
ADD CONSTRAINT FK_product_seller
FOREIGN KEY (sid) REFERENCES seller(sid)
;

ALTER TABLE `order`
ADD CONSTRAINT FK_order_user
FOREIGN KEY (uid) REFERENCES user(uid)
;

ALTER TABLE `item`
ADD CONSTRAINT FK_item_seller
FOREIGN KEY (sid) REFERENCES `seller`(sid)
;

ALTER TABLE `item`
ADD CONSTRAINT FK_item_product
FOREIGN KEY (pid) REFERENCES `product`(pid)
;

ALTER TABLE `item`
ADD CONSTRAINT FK_item_order
FOREIGN KEY (oid) REFERENCES `order`(oid)
;

ALTER TABLE `review`
ADD CONSTRAINT FK_product_product
FOREIGN KEY (pid) REFERENCES product(pid)
;

ALTER TABLE `review`
ADD CONSTRAINT FK_product_user
FOREIGN KEY (uid) REFERENCES `user`(uid)
;




























