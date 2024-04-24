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