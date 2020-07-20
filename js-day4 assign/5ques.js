let sal=prompt("Enter the sales man salary")
let amt=0;
switch(true)
{
    case (sal>=0 && sal<=5000):
        amt=(sal)*(2/100);
        break;
    case (sal>5000 && sal<=10000):
        amt=(sal)*(5/100);
        break;
    case (sal>10000 && sal<=20000):
        amt=(sal)*(7/100);
        break;
    case (sal>20000):
        amt=(sal)*(10/100);
        break;
    default:
        console.log("Enter valid salary");   

}
console.log("The total commision earned by the sales man:"+amt);