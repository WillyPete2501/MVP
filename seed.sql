DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id serial,
    f_name varchar(15),
    l_name varchar(20),
    height_inches integer,
    weight_lbs integer,
    age integer
);

DROP TABLE IF EXISTS fitlog;
CREATE TABLE fitlog (
    log_id serial,
    metric1 varchar(20),
    metric2 varchar(20),
    metric3 varchar(20),
    metric4 varchar(20)
);

INSERT INTO users (f_name, l_name, height_inches, weight_lbs, age) VALUES ('Tom', 'Powers', 73, 220, 36);
INSERT INTO users (f_name, l_name, height_inches, weight_lbs, age) VALUES ('Natalee', 'Kotos', 67, 110, 28);

