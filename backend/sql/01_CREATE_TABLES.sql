CREATE TABLE IF NOT EXISTS users (
   id SERIAL PRIMARY KEY,
   firstname VARCHAR(30) NOT NULL,
   lastname VARCHAR(30) NOT NULL,
   birthday DATE NOT NULL,
   gender VARCHAR(10) DEFAULT 'N/A' NOT NULL,
   username VARCHAR(20) UNIQUE NOT NULL
);

-- ALTER TABLE users 
--    ADD CONSTRAINT check_gender 
--    CHECK (gender = 'N/A' OR gender = 'Female' OR gender = 'Male');

CREATE TABLE IF NOT EXISTS messages (
   id SERIAL PRIMARY KEY,
   content VARCHAR (255) NOT NULL,
   sender INTEGER NOT NULL REFERENCES users(id),
   receiver INTEGER NOT NULL REFERENCES users(id),
   seen BOOLEAN DEFAULT false NOT NULL,
   timestampSent TIMESTAMP NOT NULL DEFAULT current_timestamp
);

