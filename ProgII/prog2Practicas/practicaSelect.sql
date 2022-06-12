USE movies_db;
SELECT * FROM movies;
SELECT * FROM actors;
SELECT title FROM movies;
SELECT * FROM movies WHERE release_date > "2000-01-01";
SELECT * FROM movies WHERE release_date BETWEEN "2000-01-01" AND "2010-12-31 23:59:59";
SELECT * FROM actors WHERE first_name LIKE "Sam" OR first_name LIKE "Mark";
SELECT * FROM movies WHERE release_date > "2000-01-01"  ORDER BY id DESC LIMIT 1;
SELECT * FROM movies WHERE title LIKE "t%";
SELECT * FROM actors WHERE first_name LIKE "%am" ORDER BY first_name ASC, last_name ASC;
SELECT * FROM movies WHERE awards IN (2,5,7);

SELECT first_name, last_name FROM actors ORDER BY first_name ASC, last_name DESC;
SELECT * FROM movies ORDER BY release_date ASC;
SELECT release_date, title FROM movies WHERE release_date > "2000-01-01" ORDER BY title ASC;
SELECT * FROM movies LIMIT 5;
SELECT * FROM movies WHERE release_date > "2000-01-01" LIMIT 3; 
SELECT * FROM movies WHERE release_date > "2000-01-01" ORDER BY title ASC LIMIT 3;
SELECT * FROM actors LIMIT 1;
SELECT * FROM movies LIMIT 1 OFFSET 20;

SELECT * FROM movies WHERE release_date BETWEEN "1999-10-01" AND "2004-12-31";
SELECT * FROM movies WHERE length BETWEEN 45 AND 150;
SELECT * FROM actors WHERE first_name BETWEEN "HE" AND "TO" OR first_name LIKE "TO%";
SELECT * FROM movies WHERE title LIKE "t%";
SELECT * FROM movies WHERE title LIKE "t%" AND title LIKE "%c";
SELECT * FROM movies WHERE release_date BETWEEN "2000-01-01" AND "2000-12-31";
SELECT * FROM movies WHERE title LIKE "-";
SELECT * FROM movies WHERE release_date BETWEEN "1999-10-01" AND "1999-10-31";
SELECT * FROM actors WHERE first_name LIKE "j____Y";
SELECT first_name, last_name FROM actors WHERE first_name LIKE "%AM" ORDER BY first_name, last_name ASC;
SELECT * FROM movies WHERE title LIKE "%LA%" AND title LIKE "%Y%";
SELECT first_name, last_name FROM actors WHERE last_name LIKE "%DE%" OR "%LL%" AND first_name LIKE "%A%";
SELECT * FROM movies WHERE (title LIKE "Toy Story%" OR title LIKE "Harry Potter%") AND length = 120 ORDER BY title ASC, length DESC;
SELECT * FROM movies WHERE rating IN (8.3,9,1,9.0);
SELECT * FROM movies WHERE awards IN (2,5,7) ORDER BY awards DESC;
SELECT * FROM movies WHERE length > 0 ORDER BY length ASC;
SELECT * FROM movies WHERE month (release_date) != 07;
SELECT * FROM actors WHERE last_name NOT LIKE "%K%";
SELECT title, length FROM movies WHERE length != 120 AND length != 150 ORDER BY title ASC 



 


 

