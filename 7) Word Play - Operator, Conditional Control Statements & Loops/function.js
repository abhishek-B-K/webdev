function wordPlay(number){
    //fill the code
    if(number>50){
        //console.log("Range is High");
        return "Range is High";
    }
    else if(number<1){
        //console.log("Not Valid");
        return "Not Valid";
    }
    else
    {
        var i=1;
        var res=" ";
       for(i=1;i<=number;i++){
            if(i%15===0)
            {
                if(i===number){
                    res+="Jump";
                }
                else{
                res+="Jump";
                }
            }
            else if(i%3===0)
            {
                if(i===number){
                    res+="Tap";
                }
                else{
                res+="Tap ";
                }
            }
            else if(i%5===0)
            {
                if(i===number){
                    res+="Clap";
                }
                else{
                    res+="Clap ";
                }
            }
            else{
                if(i===number){
                    res+=i;
                }
                else{
                res+=i+" ";
                }
            }
        }
        return res;
        //console.log(res);
    }
}