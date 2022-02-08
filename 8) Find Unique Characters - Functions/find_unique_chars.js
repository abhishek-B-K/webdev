function modifyString(str)
{
//fill code here
    const text = str;
    const newTest = text.split(/\s/).join('');
    str = newTest.toLowerCase();
    return str;
}

function uniqueCharacters(str)
{
    
    var str1=modifyString(str);
    var uniql="";
    for (var x=0;x < str1.length;x++)
    {

        if(uniql.indexOf(str1.charAt(x))==-1)
        {
            if(str1[x]  != ' ')
                uniql += str1[x];  
  
        }
    }
    str = uniql;
    return str; 
}  

