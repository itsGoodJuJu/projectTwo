CREATE TABLE login(
   id SERIAL PRIMARY KEY,
    email VARCHAR(500),
    password VARCHAR(500),
    phone_number INTEGER
);

INSERT INTO login(email, password, phone_number)
VALUES
('davidle241872@yahoo.com', 'ineedhelp', 404-936-0767),
('jordanLeBron@yahoo.com', 'money', 215-632-1234);