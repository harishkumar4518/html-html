function call()
var a=document.getElementById("use").value;
var b=document.getElementById("pas").value;
var c="harish";
var d="12345";
if(c===(a=" "))||(d===(b=" "))
{
alert("Please Enter the All field");
}
else if((c===a)&&(d===b))
{
alert("value Successfully submitted");
}
else((c!===a)&&(d!===b))
{
alert("Please register first or Check the field");
}
