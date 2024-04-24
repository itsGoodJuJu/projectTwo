CREATE TABLE login(
   id SERIAL PRIMARY KEY,
    email VARCHAR(500),
    phone_number INTEGER
);

INSERT INTO login(email, phone_number)
VALUES
('davidle241872@yahoo.com', 404-936-0767),
('jordanLeBron@yahoo.com', 215-632-1234);