

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

function logout()
{
    removeCookie("login");
    removeCookie("password");
    window.location.href="http://localhost/projekcik_szkola/sign-in.html";
}

function edit(text,type,url="",name="")
{
    var oldText = text.innerHTML;
    var newText = prompt("Popraw '"+oldText+"'  na");

    if(newText != "" && newText != null)
    if(validText(newText,type))
    {
        if(confirm("Czy napewno chcesz zmieniæ '"+ newText +"' na '"+ oldText +"'?"))
        {
            
           if(url!=="" && name!=="")
           {
                var msg= {"login":getCookie("login"),"password":getCookie("password"),"element":name,"text":newText};
                sendPostRequest(msg,url,function(response){
                    if(response.code === 200)
                    {
                        text.innerHTML=newText;
                        if(type=="login" || type=="password") setCookie(type,newText,1);
                    }
                    else alert("Podczas zamiany wyst¹pi³ problem.");
                });
           }
           else text.innerHTML=newText;
        }
  
    }
    else alert("Nie mo¿na dokonaæ zmiany - podana wartoœæ jest niepoprawna");
       
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

              var content=document.getElementById("left-content");
              content.innerHTML="";
              
             addNewElement("span","text",content,"Imie:");
             addNewElement("span","text",content,response.name,"click",function(){edit(this,"word","php/edit.php","name")});
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"Nazwisko:");
             addNewElement("span","text",content,response.lastName,"click",function(){edit(this,"word","php/edit.php","laset_name")});
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"Klasa:");
             addNewElement("span","text",content,response.class);
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"Login:");
             addNewElement("span","text",content,getCookie("login"),"click",function(){edit(this,"login","php/edit.php","login")});
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"email:");
             addNewElement("span","text",content,response.email,"click",function(){edit(this,"email","php/edit.php","email")});
             addNewElement("br","",content,"");
        
           }
           else alert(response.error);
        
        });
  
};

