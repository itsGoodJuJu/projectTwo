CREATE TABLE events (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    time TIME NOT NULL,
    date DATE NOT NULL,
    description VARCHAR(500) NULL
);

INSERT INTO events (name, location, time, date, description)
VALUES ('Mother''s Day', 'KPOT', '12:00:00', '2024-05-12', null),
('Memorial Day', 'Home', '09:00:00', '2024-05-27', 'Stay at home and relax!')
RETURNING *;


CREATE TABLE loginInfo (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    phoneNumber INTEGER NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip VARCHAR(50) NOT NULL,
    birthday DATE NOT NULL
)

<<<<<<< HEAD
INSERT INTO loginInfo (email, username, password, name, phoneNumber, address, city, state, birthday)
=======
INSERT INTO events (email, username, password, name, phoneNumber, address, city, state, birthday)
>>>>>>> main
VALUES ('justinladams88@gmail.com', 'itsGoodJuJu', 'password1234', 'Justin Adams', 7708235063, '482 Spring Road', 'Atlanta', 'GA', '30301', '1996-03-01'),
('jordandmorgan24@gmail.com', 'moneywayjo', 'lakersIn6', 'Jordan Morgan', 4048231234, '3001 Marvel Court', 'Atlanta', 'GA', '30341', '2004-12-22')
RETURNING *;

<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
