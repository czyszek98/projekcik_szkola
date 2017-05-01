/////////////////////////////////Operacje na ciasteczkach////////////////////////////////////
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

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
};

function removeCookie(cname)
{
    setCookie(cname,"",0);
};
/////////////////////////////////////////////////////////////////////
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};
/////////////////////////////////WALIDACJA FORMULARZY////////////////////////////////////

function checkForm(submit)
{
    
    var inputs=submit.parentElement.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++) inputs[i].required=true;

};
function validInput(input)
{
    var valid=true;
    

        switch(input.name)
        {
            case "login":

            var reg = /^[a-zA-Z_0-9]{5,}$/g              ////////Wyrazenie regularne definiujace dozwolone loginy
            if (!reg.test(input.value)) 
            {
                input.setCustomValidity("Nie poprawny login.");
                valid=false;
            }
            else input.setCustomValidity("");
            
            break;
            
            case "password":

            var reg = /^[a-zA-Z0-9]{6,}$/g              ////////Wyrazenie regularne definiujace dozwolone hasla
            if (!reg.test(input.value)) 
            {
                input.setCustomValidity("Niepoprawne hasło.");
                valid=false;
            }
            else input.setCustomValidity("");
            
            break;
            
            case "confirm_password":

            if (input.parentElement.password.value != input.value) 
            {
                input.setCustomValidity("Powt�rz has�o!");
                valid=false;
            }
            else input.setCustomValidity("");
            
            break;
            
            case "email":

            var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/g    ////////Wyrazenie regularne definiujace poprawny adres email
            if (!reg.test(input.value)) 
            {
                input.setCustomValidity("Niepoprawny adres e-mail.");
                valid=false;
            }
            else input.setCustomValidity("");
            
            break;
            
            case "word":

            var reg = /^[a-zA-ZąĄę�?ćĆł�?óÓń�?żŻźŹ]{3,}$/g    ////////Wyrazenie regularne definiujace poprawny adres email
            if (!reg.test(input.value)) 
            {
                input.setCustomValidity("Dozwolone s� tylko ma�e i wielkie litery.");
                valid=false;
            }
            else input.setCustomValidity("");
            
            break;
            
        }
    
return valid;
    
};
function validForm(form)
{

    var inputs = form.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
    {
        switch(inputs[i].getAttribute("name"))
        {
            case "signUp":
                inputs[i].addEventListener('click', function(){checkForm(this);signUp(this);});
            break;
            
            case "signIn":
                inputs[i].addEventListener('click', function(){checkForm(this);signIn(this);});
            break;
            
            case "password":
                inputs[i].addEventListener('keyup', function(){validInput(this);if(form.signUp!=null)validInput(this.parentElement.confirm_password);});
            break;
            
        default:
            inputs[i].addEventListener('keyup', function(){validInput(this);});
        }
    }
};

function validation()
{
    var forms = document.getElementsByTagName("form");
    for(var i=0;i<forms.length;i++)
    {
        validForm(forms[i]);
    }
};

function validText(text,type,show=true)
{
    var input=document.createElement("input");
    input.name=type;
    input.value=text;
    if(!validInput(input))
    {
        if(show)alert(input.validationMessage);
        return false;
    }
    return true;
    
};
//////////////////////////////////////////////////////////////////////////

function addNewElement(tagName,className,destination,innerHtml,event="",_function="")
{
     var text = document.createElement(tagName);
              text.className=className;
              text.innerHTML=innerHtml;
              destination.appendChild(text);
              if(_function !== "") text.addEventListener(event,_function);
              return text;
};








function sendPostRequest(msg,url, callback)
{
   //alert(JSON.stringify(msg));
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        {
            console.log(xmlHttp.responseText);
            callback(JSON.parse(xmlHttp.responseText));
        }
        }; 
        xmlHttp.open("POST", url,true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send("request="+JSON.stringify(msg));
};


