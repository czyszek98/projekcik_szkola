

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

    if(newText !== "" && newText !== null)
    if(validText(newText,type))
    {
        if(confirm("Czy napewno chcesz zmieniæ '"+ oldText +"' na '"+ newText +"'?"))
        {
            
           if(url!=="" && name!=="")
           {
                var msg= {"login":getCookie("login"),"password":getCookie("password"),"element":name,"text":newText};
                sendPostRequest(msg,url,function(response){
                    if(response.code === 200)
                    {
                        text.innerHTML=newText;
                        if(type==="login" || type==="password") setCookie(type,newText,1);
                        document.getElementById("user_name").innerHTML=getCookie("login");
                    }
                    else 
                    {
                        alert("Podczas zamiany wyst¹pi³ problem.");
                        alert(response.error);
                    }
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
             addNewElement("span","text",content,response.name,"click",function(){edit(this,"word","php/edit.php","name");});
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"Nazwisko:");
             addNewElement("span","text",content,response.lastName,"click",function(){edit(this,"word","php/edit.php","laset_name");});
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"Klasa:");
             addNewElement("span","text",content,response.class);
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"Login:");
             addNewElement("span","text",content,getCookie("login"),"click",function(){edit(this,"login","php/edit.php","login");});
             addNewElement("br","",content,"");
             
             addNewElement("span","text",content,"email:");
             addNewElement("span","text",content,response.email,"click",function(){edit(this,"email","php/edit.php","email");});
             addNewElement("br","",content,"");
        
           }
           else alert(response.error);
        
        });
  
};
function loadUrl(url)
{
              
              var content=document.getElementById("left-content");
              content.innerHTML="";
              var frameset=addNewElement("frameset","",content,"");
              var frame=addNewElement("frame","",frameset,"");
              frame.src=url;
                
};

function loadSubjectApps(subjectId)
{
      var msg={
      "login":getCookie("login"),
      "password":getCookie("password"),
      "subjectId":parseInt(subjectId)
  };

  
           sendPostRequest(msg,"php/subjectApps.php",function(response) {
           if(response.code[0] === 200)
           {
              var content=document.getElementById("left-content");
              content.innerHTML="";
              
              for(var i=0;i<response.id.length;i++)
              {
                  var hash={"action":"apk","apkUrl":response.url[i]};
                  var link = addNewElement("a","",content,"");
                  link.setAttribute("href","#"+JSON.stringify(hash));
                  var subject = addNewElement("div","tile",link,"<p>"+response.name[i]+"</p>");
                  
                  
                   if(response.background[i][0] === '#')
                   {
                       subject.style.backgroundColor=response.background[i];
                   }
                   else
                   {
                       subject.style.backgroundImage="url('"+response.background[i]+"')";
                       subject.style.backgroundSize="100% 100%";
                   }
                  

              }

             
           }
           else alert(response.error);
        
        });
};
function loadApps()
{
  var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
  };

  
           sendPostRequest(msg,"php/apps_data.php",function(response) {
           if(response.code[0] === 200)
           {
              var content=document.getElementById("left-content");
              content.innerHTML="";
              
              for(var i=0;i<response.id.length;i++)
              {
                  var hash={"action":"apps","subjectId":response.id[i]};
                  var link = addNewElement("a","",content,"");
                  link.setAttribute("href","#"+JSON.stringify(hash));
                  var subject = addNewElement("div","tile",link,"<p>"+response.name[i]+"</p>");
                  
                  
                   if(response.background[i][0] === '#')
                   {
                       subject.style.backgroundColor=response.background[i];
                   }
                   else
                   {
                       subject.style.backgroundImage="url('"+response.background[i]+"')";
                       subject.style.backgroundSize="100% 100%";
                   }
                  

              }

             
           }
           else alert(response.error);
        
        });
  
};
function controller()
{   console.log("halo, policja");
    window.onload = window.onhashchange =
    function(){
        var str =window.location.hash;
        console.log(str.slice(1,str.length));
        var hash = JSON.parse(str.slice(1,str.length));
        
        switch(hash.action)
        {
          case "subjectapp":
            loadApps();   
          break;
          
          case "apps":
            loadSubjectApps(hash.subjectId);   
          break;
          
          case "apk":
            loadUrl(hash.apkUrl);   
          break;
          
          case "profile":
            loadProfile();   
          break;
          
          case "theme":
            themeContent(); 
          break;
        }
        
    };
};