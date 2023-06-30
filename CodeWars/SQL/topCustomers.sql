-- Replace with your query (in pure SQL)
SELECT customer.customer_id,
       customer.email,
       COUNT(payment.customer_id) AS payments_count,
       CAST(SUM(payment.amount) AS float) AS total_amount
FROM customer
INNER JOIN payment ON  customer.customer_id = payment.customer_id
GROUP BY customer.customer_id, customer.email
ORDER BY SUM(payment.amount) DESC
LIMIT 10