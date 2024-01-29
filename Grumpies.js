function validate()
{
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value.trim() == "" || password.value.trim() == "")
    {
        alert("Enter the values not the spaces");
        return false;
    }
    else
    {
        return true;
    }
    
}