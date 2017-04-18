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
		
	 	addNewElement("img", "" , addTheme ,  "").src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/3d-transparent-glass-icons-alphanumeric/068118-3d-transparent-glass-icon-alphanumeric-plus-sign.png"; 
		addTheme.addEventListener("click", addThemeFunction);
	 });
	 		 	
	 
	
};
function addThemeFunction()
{
	var content=document.getElementById("left-content");
	content.innerHTML="";
	
	addNewElement("p", "themeClass" , content ,  "Wybierz kolor tła!"); 	
	var inputColor=addNewElement("input", "themeElement" , content ,  ""); 
	inputColor.type="color";
	inputColor.id="backgroundInput";
	
	addNewElement("p", "themeClass" , content ,  "Wybierz kolor profilu!"); 	
	inputColor=addNewElement("input", "themeElement" , content ,  ""); 
	inputColor.type="color";
	inputColor.id="profileInput";
	
	addNewElement("p", "themeClass" , content ,  "Wybierz kolor stopki!"); 	
	inputColor=addNewElement("input", "themeElement" , content ,  ""); 
	inputColor.type="color";
	inputColor.id="footerInput";
	
	
	addNewElement("p", "themeClass" , content ,  "Nazwij swój motyw!"); 	
	inputColor=addNewElement("input", "inputTheme" , content ,  ""); 
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