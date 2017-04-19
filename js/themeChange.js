function themeLoad(){
	var msg={
      "login":getCookie("login"),
      "password":getCookie("password")
	};

	 sendPostRequest(msg,"php/themeOnload.php", function(respone){
			
			  var BColor= respone.backgroundColor;
			  var FColor=respone.footerColor;
			  var PColor= respone.profileColor;	
			
			  var footer=document.getElementById("footer");
			  footer.style.backgroundColor=FColor;
			  
			  var bodi=document.body;
			  bodi.style.backgroundColor=BColor;
			  
			  var profile=document.getElementById("profile");
			  profile.style.backgroundColor=PColor;
		
		
	 });
	

};
function themeContent(){
	
	 var content=document.getElementById("left-content");
     content.innerHTML="";
	 var msg={"login":"asd"};
	 
	 sendPostRequest(msg,"php/themeID.php", function(respone){
		var themeIndex=respone.name.length;	
	
	for(var i=0; i < themeIndex; i++)
	{
	 var divTheme = document.createElement("DIV");	
	 divTheme.id=respone.id[i];
	 addNewElement("p", "" , divTheme ,  respone.name[i]);	
	 divTheme.style.float="left";	
	 divTheme.className="tile";
	 divTheme.addEventListener("click", function(){setTheme(this);});
	 content.appendChild(divTheme);	 
	}
	
	
		var addTheme=addNewElement("div", "tile" , content ,  "");	 
		
	 	imgPlus=addNewElement("img", "imgTheme" , addTheme ,  "").src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-alphanumeric/068118-3d-transparent-glass-icon-alphanumeric-plus-sign.png"; 
		
		
		addTheme.addEventListener("click", addThemeFunction);
	 });
	 		 	
	 
	
};
function addThemeFunction()
{
	var content=document.getElementById("left-content");
	content.innerHTML="";
	
	var divThemeInput=addNewElement("div", "tile" , content  ,  ""); 
	divThemeInput.style.height="50%";
	addNewElement("p", "" , divThemeInput ,  "Wybierz kolor tła!"); 	
	var inputColor=addNewElement("input", "" , divThemeInput ,  ""); 
	inputColor.type="color";
	inputColor.id="backgroundInput";
	
	divThemeInput=addNewElement("div", "tile" , content  ,  ""); 
	divThemeInput.style.height="50%";
	addNewElement("p", "" , divThemeInput ,  "Wybierz kolor profilu!"); 	
	inputColor=addNewElement("input", "" , divThemeInput ,  ""); 
	inputColor.type="color";
	inputColor.id="profileInput";
	
	divThemeInput=addNewElement("div", "tile" , content  ,  ""); 
	divThemeInput.style.height="50%";
	addNewElement("p", "" , divThemeInput ,  "Wybierz kolor stopki!"); 	
	inputColor=addNewElement("input", "" , divThemeInput ,  ""); 
	inputColor.type="color";
	inputColor.id="footerInput";
	
	divThemeInput=addNewElement("div", "tile" , content  ,  ""); 	
	divThemeInput.style.height="50%";
	addNewElement("p", "" , divThemeInput ,  "Nazwij swój motyw!"); 	
	inputColor=addNewElement("input", "" , divThemeInput ,  ""); 
	inputColor.id="inputText";
	inputColor.width="70px";
	inputColor.height="50px";
	
	
	addNewElement("button", "buttonClass" , content ,  "Zrealizuj!").addEventListener("click", addingTheme); 
	
}
function addingTheme()
{
	var profile=document.getElementById('profileInput').value;
	var footer=document.getElementById('footerInput').value;
	var color=document.getElementById('backgroundInput').value;
	var inputText=document.getElementById('inputText').value;
	
	var msg={
      "prof":profile,
      "foot":footer,
	  "color":color,
	  "input":inputText
  };
	sendPostRequest(msg,"php/addTheme.php",function(response) {
	
		
	
	});
	themeContent();
	
}
function setTheme(element){
	
        if(confirm("Czy chcesz zmienić istniejący motyw na następujący? "))
        {	
            var msg={
                "login":getCookie("login"),
                "password":getCookie("password"),
                "theme":element.getAttribute("id")
            };
			
            sendPostRequest(msg,"php/theme.php",function(respone){
			
              var BColor= respone.backgroundColor;
			  var FColor=respone.footerColor;
			  var PColor= respone.profileColor;	
			
			  var footer=document.getElementById("footer");
			  footer.style.backgroundColor=FColor;
			  
			  var bodi=document.body;
			  bodi.style.backgroundColor=BColor;
			  
			  var profile=document.getElementById("profile");
			  profile.style.backgroundColor=PColor;
			  
				
            });
			
        }
      
        
	
        

};