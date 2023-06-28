--Your Code Here
SELECT name, country
FROM travelers
WHERE country NOT IN('Mexico', 'Canada', 'USA')