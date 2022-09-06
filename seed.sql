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

INSERT INTO users (height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4) VALUES (73, 220, 36, 'Deadlift', '315', '4 sets', '10 reps', '1.5 min rest');
INSERT INTO users (height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4) VALUES (67, 110, 28, 'Squats', '65', '3 sets', '12 reps', '1 min rest' );

