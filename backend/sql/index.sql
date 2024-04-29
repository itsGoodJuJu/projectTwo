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


CREATE TABLE logininfo (
    id SERIAL NOT NULL,
    email VARCHAR(50),
    password VARCHAR(100),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    CONSTRAINT pk_login PRIMARY KEY (id,email)
);


INSERT INTO logininfo (email, password, firstName, lastName)
VALUES ('justinladams88@gmail.com', 'Example123!', 'Justin', 'Adams')
RETURNING *;


-- CREATE TABLE logininfo (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(50) PRIMARY KEY,
--     -- username VARCHAR(50) NOT NULL,
--     password VARCHAR(50) NOT NULL,
--     firstName VARCHAR(50) NOT NULL,
--     lastName VARCHAR(50) NOT NULL
--     -- phoneNumber INTEGER NOT NULL,
--     -- address VARCHAR(50) NOT NULL,
--     -- city VARCHAR(50) NOT NULL,
--     -- state VARCHAR(50) NOT NULL,
--     -- zip VARCHAR(50) NOT NULL,
--     -- birthday DATE NOT NULL
-- );

-- INSERT INTO loginInfo (email, username, password, firstName, lastName, phoneNumber, address, city, state, birthday)
-- VALUES ('justinladams88@gmail.com', 'itsGoodJuJu', 'password1234', 'Justin Adams', 7708235063, '482 Spring Road', 'Atlanta', 'GA', '30301', '1996-03-01'),
-- ('jordandmorgan24@gmail.com', 'moneywayjo', 'lakersIn6', 'Jordan Morgan', 4048231234, '3001 Marvel Court', 'Atlanta', 'GA', '30341', '2004-12-22')
-- RETURNING *;

