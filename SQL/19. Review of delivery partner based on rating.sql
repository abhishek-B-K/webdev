

SELECT partner_id, partner_name,
CASE WHEN rating>=4 THEN 'GOOD' 
WHEN rating>=2 AND rating<4 THEN 'AVERAGE' 
WHEN rating<2 THEN 'WORST' END AS REVIEW
FROM delivery_partners
ORDER BY partner_id ASC;