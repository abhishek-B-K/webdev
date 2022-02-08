function validateEmail(email) {
    //fill the code
    var x = email;
     var validate = /^([a-zA-z0-9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-z0-9]{2,4})+$/;
 
     if(x.match(validate))
        return "Valid email address!";
     else
         return "Invalid email address!";
 }
 
 