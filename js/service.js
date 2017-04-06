function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function signUp(submit)
{
    var check=true;
    var inputs=submit.parentElement.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i].checkValidity() == false) check=false;  
    }
    if(check)
    {
        var response;
        var msg={
        "login":submit.parentElement.elements["login"].value,
        "password":submit.parentElement.elements["password"].value,
        "email":submit.parentElement.elements["email"].value,
        "account_type":submit.parentElement.elements["account_type"].value
        };
        alert(JSON.stringify(msg));
        
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           response  = JSON.parse(this.responseText);
           if(response.code == 200) window.location.href=response.url;
           else alert(response.error);
        }
        };
        
        xhttp.open("POST", "php/register.php",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("request="+JSON.stringify(msg));
        
    }
}