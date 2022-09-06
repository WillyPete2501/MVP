DROP TABLE IF EXISTS users;
CREATE TABLE users (
    log_id serial,
    height_inches integer,
    weight_lbs integer,
    age integer,
    exercise varchar(20),
    metric1 varchar(20),
    metric2 varchar(20),
    metric3 varchar(20),
    metric4 varchar(20)
);

