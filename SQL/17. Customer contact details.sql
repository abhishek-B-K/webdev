


SELECT customer_id, customer_name,
IFNULL(address,IFNULL(email_id, 'NA')) AS CONTACT_DETAILS
FROM customers;