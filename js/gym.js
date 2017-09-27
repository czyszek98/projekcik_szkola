function gymContent()
{
	var hand=document.getElementById("content");
	hand.innerHTML="";	
	  var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
      };
	 
	 sendPostRequest(msg,"php/gym.php", function(respone)
	 {
	
		
		var hand=document.getElementById("content");
	var el=addNewElement("div", "" , hand ,  "");	
	
	
	el.style.height="100%";
	el.style.width="40%";		
	el.style.float="left";
	
	
	addNewElement("p", "" , el ,  "Wymiary i BMI:").style.fontSize="40px";		
	var editThis=addNewElement("p", "" , el ,  "Waga: "+kgRemove(respone.weight)).addEventListener("click", function(){editGymStats(this, "weight");});	
	addNewElement("p", "" , el ,  "Wzrost: "+cmRemove(respone.height)).addEventListener("click", function(){editGymStats(this, "height");});	
	addNewElement("p", "" , el ,  "BMI: "+respone.bmi);	
	addNewElement("p", "" , el ,  "Ilość kcal w diecie: "+respone.kcal);
	var vart=addNewElement("p", "gymVarious" , el ,  "Twój cel: "+respone.goal);		
	vart.style.paddingTop="100px";
	vart.style.fontSize="30px";
	vart.style.fontWeight="bold";
	
	var elem=addNewElement("div", "" , hand ,  "");	
	elem.style.height="100%";
	elem.style.width="59%";	
	elem.style.backgroundColor="";
	elem.style.float="left";
	
	var bottomElem=addNewElement("div", "" , elem ,  "");
	bottomElem.style.height="10%";
	bottomElem.style.width="100%";	
	addNewElement("p", "gymVarious" , bottomElem ,  "Plan:").style.fontSize="50px";	
	
	
	var table=addNewElement("table", "gymVarious" , elem ,  "");
	
	addNewElement("th", "tableGym" , table ,  "Ćwiczenie:  ");	
	addNewElement("th", "tableGym" , table ,  "  Ciężar/Powtórzenia:");
	var trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Wycisk na klatkę piersiową:");	
	addNewElement("td", "tableGym" , trTable ,  kgRemove(respone.chest)).addEventListener("click", function(){editGymStats(this, "Chest");});
	trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Martwy ciąg:");	
	addNewElement("td", "tableGym" , trTable ,  kgRemove(respone.deadLift)).addEventListener("click", function(){editGymStats(this, "DeadLift");});
	trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Przysiad:");	
	addNewElement("td", "tableGym" , trTable ,  kgRemove(respone.sit)).addEventListener("click", function(){editGymStats(this, "Sit");});	
	trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Podciągnięcia nadchwytem:");	
	addNewElement("td", "tableGym" , trTable ,  respone.muscleUp).addEventListener("click", function(){editGymStats(this, "MuscleUp");});	
	
		
	addNewElement("p", "" , elem ,  "*kliknij na pole aby uzupełnić lub edytować").style.fontSize="22px";
		
		 
	});
	

	
};

function kgRemove(dane)
{
	if(dane!="Brak danych")
	{
	dane+="kg";
	}	
return dane;		
};

function cmRemove(dane)
{	if(dane!="Brak danych")
	{
	dane+="cm";
	}	
return dane;		
};

function editGymStats(formal, direction)
{
	    while (formal.firstChild)
		
		{
        formal.removeChild(formal.firstChild);
		}
		addNewElement("span", "" , formal,  "Zamień na: ");
		var inputEdit=addNewElement("input", "" , formal,  "");
		inputEdit.value="..";
		addNewElement("button", "" , formal,  "Zamień").addEventListener("click", function(){sendEditGym(inputEdit.value, direction);});	;
		
};

function sendEditGym(valueEdit, direction)
{	
	 var msg={
      "login":getCookie("login"),
      "password":getCookie("password"),
	  "edit":valueEdit,
	  "dire":direction
      };
	 
	 sendPostRequest(msg,"php/editGym.php", function(respone)
	 {
			
	 }
	);
	gymContent();
};


	
	
	
	
	
	
	
	


