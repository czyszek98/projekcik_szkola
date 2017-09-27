

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
        if(confirm("Czy napewno chcesz zmieni� '"+ oldText +"' na '"+ newText +"'?"))
        {

           if(url!=="" && name!=="")
           {
                var msg= {"login":getCookie("login"),"password":getCookie("password"),"element":name,"text":newText};
                sendPostRequest(msg,url,function(response){
                    if(response.code === 200)
                    {
                        text.innerHTML=newText;
                        if(type==="login" || type==="password") setCookie(type,newText,1);
                        document.getElementById("user-name").innerHTML=getCookie("login");
                    }
                    else
                    {
                        alert("Podczas zamiany wyst�pi� problem.");
                        alert(response.error);
                    }
                });
           }
           else text.innerHTML=newText;
        }

    }
    else alert("Nie mo�na dokona� zmiany - podana warto�� jest niepoprawna");

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

              var content=document.getElementById("content");
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

              var content=document.getElementById("content");
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
              var content=document.getElementById("content");
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
              var content=document.getElementById("content");
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

function loadAllLessons()
{


  var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
  };


        content.innerHTML="";



           sendPostRequest(msg,"php/lessons_data.php",function(response) {
           if(response.code[0] === 200)
           {
             var content=document.getElementById("content");


              for(var i=0;i<response.id.length;i++)
              {
                  var hash={"action":"subjectlessons","subjectId":response.id[i]};
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


        sendPostRequest(msg,"php/getUser.php",function(response) {
              if(response.code === 200)
              {
                 if(response.account_type == 'T' || response.account_type == 'A')
                 {
                     console.log("funkcasdyja1");
                     var hash={"action":"articleEditor"};
                     var link = addNewElement("a","",content,"");
                     link.setAttribute("href","#"+JSON.stringify(hash));
                     var subject = addNewElement("div","tile",link,"<p>+Dodaj lekcje+</p>");
                }
              }
              else alert("wystąpił problem");

     });


};

function subjectLessons(subjectId)
{
      var msg={
      "login":getCookie("login"),
      "password":getCookie("password"),
      "subjectId":parseInt(subjectId)
  };


           sendPostRequest(msg,"php/subjectLessons.php",function(response) {
           if(response.code[0] === 200)
           {
              var content=document.getElementById("content");
              content.innerHTML="";

              for(var i=0;i<response.id.length;i++)
              {
                  var hash={"action":"lesson","lessonId":response.id[i]};
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
function loadLesson(lessonId)
{
      var msg={
      "login":getCookie("login"),
      "password":getCookie("password"),
      "lessonId":parseInt(lessonId)
  };


           sendPostRequest(msg,"php/lesson.php",function(response) {
           if(response.code[0] === 200)
           {
              var content=document.getElementById("content");
              content.innerHTML="";

              for(var i=0;i<response.content.tagName.length;i++)
              {

                  addNewElement(response.content.tagName[i],"",content,response.content.innerHtml[i],"click",function(){edit(this,"word");});

              }


           }
           else alert(response.error);

        });

};



var menu_bool=0;
function menu()
{


	if(menu_bool)
	{



			$("#user-profile").animate({opacity: 0 }, 500,'linear',function(){$(this).hide();});
			$("#settings").animate({opacity: 0 }, 500,'linear',function(){$(this).hide();});
			$("#user-score").animate({opacity: 0 }, 500,'linear',function(){$(this).hide();});


			window.setTimeout(function(){$("#menu").css("min-width","30px").css("width","30px");$("#menu-button").css("transform","rotate(360deg)");},500);

			menu_bool=0;

	}
	else
	{

		menu_bool=1;

			$("#menu").css("width","30%");

						window.setTimeout(function(){$("#menu").css("min-width","250px");},500);

			$("#menu-button").css("transform","rotate(-180deg)");

			window.setTimeout(function(){

				$("#user-profile").animate({opacity: 1 }, 500,'linear').show();
				$("#settings").animate({opacity: 1 }, 500,'linear').show();
				$("#user-score").animate({opacity: 1 }, 500,'linear').show();



				},1000);
	}
}

function articleEditor()
{
    $(document).ready(function(){
       $("#content").load("tools/articleEditor/editor.html");


    });
}


function controller()
{   console.log("halo, policja");
    window.onload = window.onhashchange =
    function(){
        var str =window.location.hash;
        if(str!=="")
        {
            console.log(str.slice(1,str.length));
            var hash = JSON.parse(str.slice(1,str.length));

            switch(hash.action)
            {
              case "subjectapp":
                loadApps();
              break;

              case "alllessons":
                loadAllLessons();
              break;

              case "subjectlessons":
                subjectLessons(hash.subjectId);
              break;

              case "lesson":
                loadLesson(hash.lessonId);
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

              case "articleEditor":

              var msg={
              "login":getCookie("login"),
              "password":getCookie("password")
              };

              sendPostRequest(msg,"php/getUser.php",function(response) {
              if(response.code === 200)
              {
                 var content=document.getElementById("content");


                 if(response.account_type == 'T' || response.account_type == 'A')
                 {
                   articleEditor();
                 }
              else alert("Brak uprawnień!");
            }
           });

              break;

              default:
                      var content=document.getElementById("content");
                      content.innerHTML="ERROR 404 NIE ZNALEZIONO STRONY";
              break;

            }
        }
    };
};
