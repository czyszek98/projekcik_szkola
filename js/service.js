

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
        "accountType":submit.parentElement.elements["accountType"].value
        };
        //alert(JSON.stringify(msg));


        sendPostRequest(msg,"php/register.php",function(response)
        {
           if(response.code == 200) window.location.href=response.url;
           else message(response.error,"error");
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
           else message(response.error,"error");

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
                        message("Podczas zamiany wyst�pi� problem.","error");
						message(response.error,"error");
                        
                    }
                });
           }
           else text.innerHTML=newText;
        }

    }
    else message("Nie mo�na dokona� zmiany - podana warto�� jest niepoprawna","error");

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
             addNewElement("span","text",content,response.lastName,"click",function(){edit(this,"word","php/edit.php","lastName");});
             addNewElement("br","",content,"");

             addNewElement("span","text",content,"Klasa:");
			 if(response.class != null)
				 addNewElement("span","text",content,response.class);
			 else
				 addNewElement("span","text",content,"Nie przydzielono");
             addNewElement("br","",content,"");

             addNewElement("span","text",content,"Login:");
             addNewElement("span","text",content,getCookie("login"),"click",function(){edit(this,"login","php/edit.php","login");});
             addNewElement("br","",content,"");

             addNewElement("span","text",content,"email:");
             addNewElement("span","text",content,response.email,"click",function(){edit(this,"email","php/edit.php","email");});
             addNewElement("br","",content,"");

           }
           else message(response.error,"error");

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
           else message(response.error,"error");

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
           else message(response.error,"error");

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
                  var hash={"action":"subjectlessons","userId":response.id[i]};
                  var link = addNewElement("a","",content,"");
                  link.setAttribute("href","#"+JSON.stringify(hash));
                  var subject = addNewElement("div","tile",link,"<p>"+response.name[i]+"</p>");

				if(response.background[1] != null)
				{
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


           }
           else message(response.error,"error");


        });


        sendPostRequest(msg,"php/getUser.php",function(response) {
              if(response.code === 200)
              {
                 if(response.accountType == 'T' || response.accountType == 'A')
                 {
                     console.log("funkcasdyja1");
                     var hash={"action":"articleEditor"};
                     var link = addNewElement("a","",content,"");
                     link.setAttribute("href","#"+JSON.stringify(hash));
                     var subject = addNewElement("div","tile",link,"<p>+Dodaj lekcje+</p>");
                }
              }
              else message("wystąpił problem","error");

     });


};

function subjectLessons(userId)
{
      var msg={
      "login":getCookie("login"),
      "password":getCookie("password"),
      "userId":parseInt(userId)
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

				if(response.background[i] != null)
				{
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


           }
           else message(response.error,"error");

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

              content.innerHTML=decodeURIComponent(response.content);


           }
           else message(response.error,"error");

        });

};



var menu_bool=0;
function menuToggle()
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
function menuHide()
{
	if(menu_bool)menuToggle();
}
function menuShow()
{
	if(!menu_bool)menuToggle();
}

function articleEditor()
{
    $(document).ready(function(){
       $("#content").load("tools/articleEditor/editor.html");

    });
}

function loadMenuitems(id)
{
  var msg={
      "login":getCookie("login"),
      "password":getCookie("password"),
      "id":id
  };


           sendPostRequest(msg,"php/loadMenuitems.php",function(response) {
           if(response.code[0] === 200)
           {
              var menu=document.getElementById("settings").getElementsByTagName("ul")[0];
              menu.innerHTML="";
				
              for(var i=0;i<response.href.length;i++)
              {
				
					let li = addNewElement("li","",menu,"");
					let a = addNewElement("a","",li,"");
						a.href='#'+decodeURIComponent(response.href[i]);
					
					addNewElement("span","settings-title",a,response.name[i]);
					addNewElement("br","",a,"");
					addNewElement("span","settings-description",a,response.description[i]);

              }
				
			//window.location.hash=decodeURIComponent(response.href[0]);
			
			
			
           }
           else message(response.error,"error");

        });
}

function activeOverlap(overlap)
{
	document.getElementById("activeOverlap").id="";
	overlap.id="activeOverlap";
}

function loadOverlaps()
{
	  var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
  };


           sendPostRequest(msg,"php/loadOverlaps.php",function(response) {
           if(response.code[0] === 200)
           {
              var overlaps=document.getElementById("overlaps");
              overlaps.innerHTML="";

              for(var i=0;i<response.id.length;i++)
              {
				let overlap = addNewElement("a","overlap",overlaps,response.name[i],"click",function(){activeOverlap(this);menuShow();});
				overlap.href='#{"action":"menu","id":"'+ response.id[i] +'"}';
              }
			
			let overlap = document.getElementsByClassName("overlap")[0];
			window.location.hash=overlap.href;
			overlap.id="activeOverlap";

           }
           else message(response.error,"error");

        });
}


function controller()
{

	let menu = document.getElementById("settings").getElementsByTagName("ul")[0];

	menu = addNewElement("li","",menu,"");
	let a = document.createElement("a");
	a.href='#{"action":"adminPanel"}';
	menu.appendChild(a);
	menu = addNewElement("span","settings-title",a,"Panel administratora");

	console.log("halo, policja");
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
                subjectLessons(hash.userId);
              break;

              case "lesson":
                loadLesson(hash.lessonId);
              break;

              case "apps":
                loadSubjectApps(hash.userId);
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


                 if(response.accountType == 'T' || response.accountType == 'A')
                 {
                   articleEditor();
                 }
			  else message("Brak uprawnień!","error");
            }
           });

              break;

              case "menu":
                  loadMenuitems(hash.id);
              break;

              default:
                      var content=document.getElementById("content");
                      content.innerHTML="ERROR 404 NIE ZNALEZIONO STRONY";
              break;

            }
        }
    };
};
