
SELECT hotel_id, hotel_name, hotel_type FROM hotel_details
WHERE hotel_id NOT IN ( SELECT hotel_id FROM orders WHERE order_date BETWEEN '2019-05-01' AND '2019-05-31' );