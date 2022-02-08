function OrderCake(str) {
	//fill the code
	var n = str.length;
	var weight = str[0] + str[1] + str[2] + str[3];
	var order_no = str[n-3] + str[n-2] + str[n-1];
	var cake_name = str.substring(4,n-3);
	var price="";
	
	price+=Math.round((weight/1000)*450);
	
	var ans="Your order for "+Math.round(weight/1000)+" kg "+cake_name+" cake has been taken. You are requested to pay Rs. "+price+" on the order no "+order_no;
    return ans;
    
}