function themeContent(){
	
	 var content=document.getElementById("left-content");
     content.innerHTML="";
	 var msg={"login":"asd"};
	 
	 sendPostRequest(msg,"php/themeID.php", function(respone){
		var themeIndex=respone.idTheme;	
	
	for(var i=1; i <= themeIndex; i++)
	{
	 var divTheme = document.createElement("DIV");
	 divTheme.style.width="110px";
	 divTheme.style.height="110px";
	 divTheme.style.backgroundColor="blue";
	 divTheme.id=i;
	 divTheme.innerHTML="heh";	 
	 divTheme.style.margin="20px";	
	 divTheme.style.padding="20px";
	 divTheme.style.float="left";	
	 divTheme.className="themeClass";
	 divTheme.addEventListener("click", function(){setTheme(this);});
	 content.appendChild(divTheme);	 
	}
	
	
		 
	 });
	 	
};
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