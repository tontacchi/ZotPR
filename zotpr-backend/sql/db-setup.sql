-- commands should follow sqlite3 syntax

CREATE TABLE users (
	id            INTEGER PRIMARY KEY AUTOINCREMENT,
	name          TEXT    NOT NULL,
	sex           TEXT CHECK(sex IN ('M', 'F', 'Other')),
	display_image TEXT
);
-- display_image: path to image file (probably discord pfps)

CREATE TABLE mile_times (
	id           INTEGER  PRIMARY KEY AUTOINCREMENT,
	user_id      INTEGER  NOT NULL,
	time_seconds INTEGER,
	recorded_at  DATETIME NOT NULL,

	FOREIGN KEY (user_id) REFERENCES users(id)
);
-- time_seconds is NULL -> user DNF their mile (bc my lungs bad whoops)

CREATE TABLE exercises (
	id       INTEGER PRIMARY KEY AUTOINCREMENT,
	name     TEXT    NOT NULL UNIQUE,
	category TEXT    NOT NULL
);
-- not sure what category should have. upper, lower, legs, core, chest, cardio, etc.

CREATE TABLE weight_lifts (
	id          INTEGER  PRIMARY KEY AUTOINCREMENT,
	user_id     INTEGER  NOT NULL,
	exercise_id INTEGER  NOT NULL,
	weight_Lb   REAL     NOT NULL,
	reps        INTEGER  NOT NULL,
	recorded_at DATETIME NOT NULL,

	FOREIGN KEY (user_id)     REFERENCES users(id),
	FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);

CREATE TABLE cardio_lifts (
	id               INTEGER  PRIMARY KEY AUTOINCREMENT,
	user_id          INTEGER  NOT NULL,
	exercise_id      INTEGER  NOT NULL,
	duration_seconds INTEGER  NOT NULL,
	reps             INTEGER  NOT NULL,
	recorded_at      DATETIME NOT NULL,

	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);

