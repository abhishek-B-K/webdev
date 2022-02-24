



SELECT DISTINCT(hotel_id), hotel_name, rating FROM hotel_details
WHERE hotel_id IN (SELECT hotel_id FROM orders WHERE order_date BETWEEN '2019-07-01' AND '2019-07-31' )
ORDER BY hotel_id;