
/* 

    Fill with appropriate and required javascript global variables  code here 

*/



function EstimateReducingInterestLoan()
{
	/* Fill with required javascript code to read input values from HTML Components  */


	  calculateEMI();
      totalPayment();
      totalInterest();
      EstimateFixedInterestLoan();


    
}

function EstimateFixedInterestLoan()
{
    /* Fill with required javascript code here  */
    document.getElementById("tInterestFixed").innerHTML = ""; /*Assign total Interest value here*/
    
     /* Fill with required javascript code here  */
    document.getElementById("tPaymentFixed").innerHTML = ""; /*Assign total payment value here*/
    
     /* Fill with required javascript code here  */
    document.getElementById("EMIFixed").innerHTML = ""; /*Assign emi  value here*/
    
    
}

function calculateEMI(){
	
    /* Fill with required javascript code here  */
    
    document.getElementById("EMI").innerHTML = " ";/*Assign emi value here*/
}

function totalPayment(){
	
	/* Fill with required javascript code here  */
	
	
    document.getElementById("tPayment").innerHTML = ""; /*Assign total payment value here*/
}

function totalInterest(){
	
/* Fill with required javascript code here  */

    document.getElementById("tInterest").innerHTML = ""; /*Assign total Interest value here*/
}


