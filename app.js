function matchPassword()
{
    var pw=document.getElementById("password");
    var pw1=document.getElementById("confirmPassword");

    if(pw!=pw1)
    {
        alert("Passwords do not match");
    }
}