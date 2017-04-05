<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link href="../css/style-user-log-in.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">        
</head>
<body>
	<div id="content">
	
		<div id="left">	
				<div id="left-up">
					<div id="cart">
						<div id="cart-one">L</div>
						<div id="cart-two">P</div>
					</div>
					<div id="logo"> <a href="index.html">  <img src="http://morethangamers.com/landingpage2/img/companies/growup.png"  height="100px" width="auto"/></a></div> 
					
				</div>
			<div id="left-content">Proponuje to miejsce na te wszystkie lekcje i inne pierdoły</div>
			
		</div>
		
		<div id="right">	
            <div id="profile">
				<div id="avatar">
					<div id="avatar-img"><img style="box-shadow: 0px 0px 16px 6px rgba(122,122,122,1);" src="http://mylokalesuche.ch/bw/wp-content/uploads/2016/10/avatar-1577909_960_720.png" width="100px" height="auto"/></div>
					<div id="avatar-login">
						<div id="avatar-name"><h2>Witaj <span> <?php echo $_SESSION["login"];	?></span></h2>
						
							<span style="top:-20px; position:relative;">	
								° zmień hasło </br>
								° wyloguj się </span>
						
						</div>					
					</div>
					
				</div>
				<div id="settings">
					<ul>
						<li>
							<span id="title-settings">Słowo</span></br>
							<span id="description-settings">Opis każdej opcji</span>
						</li>
						<li>
							<span id="title-settings">Słowo</span></br>
							<span id="description-settings">Opis każdej opcji</span>
						</li>
						<li>
							<span id="title-settings">Słowo</span></br>
							<span id="description-settings">Opis każdej opcji</span>
						</li>
						<li>
							<span id="title-settings">Motywy</span></br>
							<span id="description-settings">Możesz tutaj zmienić wygląd strony</span>
						</li>
						<li>
							<span id="title-settings">Słowo</span></br>
							<span id="description-settings">Opis każdej opcji</span>
						</li>
						<li>
							<span id="title-settings">Słowo</span></br>
							<span id="description-settings">Opis każdej opcji</span>
						</li>
					</ul>
				
				
				
				</div>
				<div id="user-point"><h3>Twoje punkty: 123</h3></div>				
             </div>
		</div>
		
			<div id="footer">
				<div id="text-footer"> Strona zaprojektowana przez Karolinę Kudlińską, Mateusza Czyszewskiego, Mikołaja Gromelskiego i Pawła Leśniewskiego ® © </div>
				<div id="back-footer" class="back-footer-left">Powrót do głównej strony: </div><div id="back-footer" class="back-footer-right"><a href="index.html"><img src="https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png" width="auto" height="75px" /></a></div>
			</div>
	
	</div>
</body>

    <script src="js/script.js"></script>  
    
</html>
