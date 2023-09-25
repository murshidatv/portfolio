function formValidation()
{

var uname = document.registration.username;
var umob = document.registration.mob;
var uemail = document.registration.email;
var umsg = document.registration.message;
if(allLetter(uname))
{
    if(ValidateEmail(uemail))
    {
        if(allnumeric(umob))
        {
            if(alphanumeric(uadd)) 
            {

            }                                
        } 
    }
}
return false;

} 


function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function allnumeric(umob)
{ 
var numbers = /^[0-9]+$/;
if(umob.value.match(numbers))
{
return true;
}
else
{
alert('Mobile number must have numeric characters only');
umob.focus();
return false;
}
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}

}
function alphanumeric(umsg)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(umsg.value.match(letters))
{
return true;
}
else
{
alert('User message must have alphanumeric characters only');
umsg.focus();
return false;
}
}
