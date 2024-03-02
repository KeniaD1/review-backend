DROP DATABASE IF EXISTS makeup_dev;

CREATE DATABASE makeup_dev;

\c makeup_dev;


CREATE TABLE makeup (
id SERIAL PRIMARY KEY , 
product_name TEXT NOT NULL,
price INT,
instock BOOLEAN,
color TEXT NOT NULL, 
image_url TEXT NOT NULL
);
