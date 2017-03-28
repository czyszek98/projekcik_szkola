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
            
            case "email":

            var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/g    ////////Wyrazenie regularne definiujace poprawny adres email
            if (!reg.test(input.value)) 
            {
                input.setCustomValidity("Niepoprawny adres e-mail.");
                valid=false;
            }
            else input.setCustomValidity("");
            
            break;
            
        }
    
return false;
    
};
function validation(form)
{

    var inputs = form.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i].getAttribute("type") != "submit")inputs[i].onchange = function(){validInput(this);};
        else inputs[i].onclick = function(){checkForm(this);};
    }
};


    var forms = document.getElementsByTagName("form");
    for(var i=0;i<forms.length;i++)
    {
        validation(forms[i]);
    }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////