function gymContent()
{
	var hand=document.getElementById("left-content");
	hand.innerHTML="";	
	  var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
      };
	 
	 sendPostRequest(msg,"php/gym.php", function(respone)
	 {
			
		 
	});
	createGym();
	
	
};
function createGym()
{
	
	var hand=document.getElementById("left-content");
	var el=addNewElement("div", "" , hand ,  "");	
	
	
	el.style.height="100%";
	el.style.width="40%";		
	el.style.float="left";
	
	
	addNewElement("p", "gymVarious" , el ,  "Wymiary i BMI:").style.fontSize="40px";		
	addNewElement("p", "gymVarious" , el ,  "Waga:");	
	addNewElement("p", "gymVarious" , el ,  "Wzrost:");	
	addNewElement("p", "gymVarious" , el ,  "BMI:");	
	
	var vart=addNewElement("p", "gymVarious" , el ,  "Twój cel:");	
	vart.style.fontSize="30px";
	vart.style.fontWeight="bold";
	
	var elem=addNewElement("div", "" , hand ,  "");	
	elem.style.height="100%";
	elem.style.width="59%";	
	elem.style.backgroundColor="";
	elem.style.float="left";
	
	var bottomElem=addNewElement("div", "" , elem ,  "");
	bottomElem.style.height="20%";
	bottomElem.style.width="100%";	
	addNewElement("p", "gymVarious" , bottomElem ,  "Plan:").style.fontSize="50px";	
	
	
	var table=addNewElement("table", "gymVarious" , elem ,  "");
	
	addNewElement("th", "tableGym" , table ,  "Ćwiczenie:  ");	
	addNewElement("th", "tableGym" , table ,  "  Ciężar(kg)/Powtórzenia:");
	var trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Wycisk na klatkę piersiową:");	
	addNewElement("td", "tableGym" , trTable ,  "2:");	
	var trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Martwy ciąg:");	
	addNewElement("td", "tableGym" , trTable ,  "2:");	
	var trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Przysiad:");	
	addNewElement("td", "tableGym" , trTable ,  "2:");	
	var trTable=addNewElement("tr", "tableGym" , table ,  "");	
	addNewElement("td", "tableGym" , trTable ,  "Podciągnięcia nadchwytem:");	
	addNewElement("td", "tableGym" , trTable ,  "2:");		
	
	
	
	
	
	
	
	
	
};

