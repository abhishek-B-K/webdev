SELECT car_id, car_name, car_type FROM cars
WHERE car_id NOT IN ( SELECT car_id FROM rentals )
GROUP BY car_id
