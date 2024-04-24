CREATE TABLE login(
    id SERIAL PRIMARY KEY,
    email VARCHAR(500),
    password VARCHAR(500),
    phone_number INTEGER,
);

INSERT INTO login (email, password, phone_number)