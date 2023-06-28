-- Create your SELECT statement here
SELECT age AS age, COUNT(*) AS people_count
FROM people
GROUP BY age