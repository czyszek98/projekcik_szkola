

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
        
         
        sendPostRequest(msg,"php/register.php",function(response)
        {
           if(response.code == 200) window.location.href=response.url;
           else alert(response.error);
        });
          
    }
};

function signIn(submit)
{
    var check=true;
    var inputs=submit.parentElement.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i].checkValidity() == false) check=false;  
    }
    if(check)
    {
        var login=submit.parentElement.elements["login"].value;
        var password=submit.parentElement.elements["password"].value;
        var response;
        var msg={
        "login":login,
        "password":password
        };
      
         sendPostRequest(msg,"php/login.php",function(response) {
           if(response.code == 200)
           {
               setCookie("login",login,1);
               setCookie("password",password,1);

               window.location.href=response.url;
           }
           else alert(response.error);
        
        });
        

        
    }
};

function loadProfile()
{
  var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
  };

  
           sendPostRequest(msg,"php/profile_data.php",function(response) {
           if(response.code === 200)
           {
              document.getElementById("left-content").innerHTML=response.name + " " + response.lastName;
           }
           else alert(response.error);
        
        });
  
};

function logout()
{
    removeCookie("login");
    removeCookie("password");
    window.location.href="http://localhost/projekcik_szkola/sign-in.html";
}

